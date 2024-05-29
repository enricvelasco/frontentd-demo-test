import { leaguesMock } from '../mocks';
import { leaguesPayloadToModel } from '../mappers/index';
import { LeagueModel } from '../models/index';
import { delay } from '../../../../utils/delay';

export const GetLeagues = async (): Promise<LeagueModel[]> => {
  await delay(2000);
  return leaguesPayloadToModel(leaguesMock);
};
