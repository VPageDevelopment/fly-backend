const assert = require('assert');
const app = require('../../src/app');

describe('\'vehicle\' service', () => {
  it('registered the service', () => {
    const service = app.service('vehicle');

    assert.ok(service, 'Registered the service');
  });
});
