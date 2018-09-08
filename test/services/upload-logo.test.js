const assert = require('assert');
const app = require('../../src/app');

describe('\'upload-logo\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-logo');

    assert.ok(service, 'Registered the service');
  });
});
