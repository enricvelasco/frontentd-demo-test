export interface CountryModel {
  id: string;
  name: string;
  code: string;
  flag: string;
}

export interface CountriesPayload {
  response: CountryModel[]
}

export interface GetAllCountriesProps {
  host: string;
  token: string;
}
