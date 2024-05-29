import { useEffect, useState } from 'react';
import { CountryModel, DashboardListModel, GetAllCountries } from '../../../core';

const host = import.meta.env.VITE_APP_API_HOST;
const apiKey = import.meta.env.VITE_APP_API_KEY;

const countryModelToDashboardListModel = (countryList: CountryModel[]): DashboardListModel[] => {
  return countryList.map(({ code, name, flag, id }) => ({
    id,
    description: code,
    image: flag,
    title: name,
    link: `/leagues/${id}`,
  }));
};

export const useCountryList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [list, setList] = useState<DashboardListModel[]>([]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  const getData = () => {
    GetAllCountries({ host, token: apiKey })
      .then((countryList) => setList(countryModelToDashboardListModel(countryList)))
      .catch((error) => console.warn('ERROR_ON_GET_COUNTRIES', error))
      .finally(() => setIsLoading(false));
  };

  return {
    list,
    isLoading,
  };
};
