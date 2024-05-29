import { GetAllCountriesProps } from '../models';
import { countriesPayloadToModelPayload } from '../mappers';
import { countryListMock } from '../mock';
import { CountryModel } from '../models/index';
import { delay } from '../../../../utils/delay';

const getUrl = (host: string) => `${host}/countries`;

export const GetAllCountries = async ({
  host,
  token,
}: GetAllCountriesProps): Promise<CountryModel[]> => {
  try {
    await delay(2000);
    return countriesPayloadToModelPayload(countryListMock);
  } catch (e) {
    throw (e);
  }
};
