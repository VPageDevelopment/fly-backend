const assert = require('assert');
const app = require('../../src/app');

describe('\'tax\' service', () => {
  it('registered the service', () => {
    const service = app.service('tax');

    assert.ok(service, 'Registered the service');
  });
});
