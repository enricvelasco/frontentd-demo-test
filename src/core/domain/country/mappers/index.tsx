import { CountriesPayload, CountryModel } from '../models';

export const countriesPayloadToModelPayload = (payload: CountriesPayload): CountryModel[] => {
  const { response } = payload;
  return response;
};
