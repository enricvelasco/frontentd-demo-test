import { LeagueModel, LeaguesPayload } from '../models/index';

export const leaguesPayloadToModel = (payload: LeaguesPayload): LeagueModel[] => {
  const { response } = payload;
  return response;
};
