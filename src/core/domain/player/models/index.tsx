export interface PlayerModel {
  id: string;
  teamId: string;
  name: string;
  image: string;
}

export interface PlayerPayload {
  response: PlayerModel[];
}
