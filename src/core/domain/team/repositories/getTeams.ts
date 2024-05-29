import { delay } from '../../../../utils/delay';
import { teamPayloadToModel } from '../mappers/index';
import { teamsMockList } from '../mocks';

export const GetTeams = async () => {
  await delay(2000);
  return teamPayloadToModel(teamsMockList);
};
