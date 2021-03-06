jest.mock('../../../internal/esi-agent');

import { API, makeAPI } from '../../../index';
import { ESIAgent } from '../../../internal/esi-agent';

let api: API = makeAPI();
// Cast to any to get the private agent property
let agent: ESIAgent = (api as any).agent;

afterEach(() => {
  agent.__reset();
});

test('Races.all', () => {
  agent.__expectRoute('get_universe_races', { });
  return api.races().then(result => {
    expect(result).toBeDefined();
  });
});
