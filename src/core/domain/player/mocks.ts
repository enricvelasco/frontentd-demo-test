import { PlayerModel, PlayerPayload } from './models/index';

export const players2015: PlayerModel[] = [
  // FC Barcelona
  { id: '1', teamId: '1', name: 'Claudio Bravo', image: 'https://example.com/claudio_bravo.png' },
  { id: '2', teamId: '1', name: 'Jordi Alba', image: 'https://example.com/jordi_alba.png' },
  { id: '3', teamId: '1', name: 'Ivan Rakitic', image: 'https://example.com/ivan_rakitic.png' },
  { id: '4', teamId: '1', name: 'Sergio Busquets', image: 'https://example.com/sergio_busquets.png' },
  { id: '5', teamId: '1', name: 'Lionel Messi', image: 'https://example.com/lionel_messi.png' },
  { id: '6', teamId: '1', name: 'Luis Suárez', image: 'https://example.com/luis_suarez.png' },
  // Real Madrid
  { id: '7', teamId: '2', name: 'Keylor Navas', image: 'https://example.com/keylor_navas.png' },
  { id: '8', teamId: '2', name: 'Sergio Ramos', image: 'https://example.com/sergio_ramos.png' },
  { id: '9', teamId: '2', name: 'Toni Kroos', image: 'https://example.com/toni_kroos.png' },
  { id: '10', teamId: '2', name: 'Luka Modric', image: 'https://example.com/luka_modric.png' },
  { id: '11', teamId: '2', name: 'Cristiano Ronaldo', image: 'https://example.com/cristiano_ronaldo.png' },
  { id: '12', teamId: '2', name: 'Karim Benzema', image: 'https://example.com/karim_benzema.png' },
];

export const playersMock: PlayerPayload = {
  response: players2015,
};
