import { LeagueModel } from '../domain/league/models/index';
import { GetLeagues } from '../domain/league/repositories/getLeagues';

export interface GetLeaguesByCountryViewProps {
  countryId: string;
}

export const GetLeaguesByCountryView = async ({ countryId }: GetLeaguesByCountryViewProps): Promise<LeagueModel[]> => {
  const leaguesList = await GetLeagues();
  return leaguesList.filter((item) => item.countryId === countryId);
};
