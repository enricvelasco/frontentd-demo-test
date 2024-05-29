import { TeamModel, TeamPayload } from '../models/index';

export const teamPayloadToModel = (payload: TeamPayload): TeamModel[] => {
  const { response } = payload;
  return response;
};
