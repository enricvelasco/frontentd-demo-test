export interface LeagueModel {
  countryId: string;
  name: string;
  code: string;
  id: string;
  image: string;
}

export interface LeaguesPayload {
  response: LeagueModel[]
}
