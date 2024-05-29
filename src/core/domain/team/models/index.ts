export interface TeamModel {
  image: string;
  code: string;
  id: string;
  name: string;
  countryID: string;
  leagueID: string;
}

export interface TeamPayload {
  response: TeamModel[];
}
