import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sparql-endpoint', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sparql-endpoint');
    assert.ok(route);
  });
});
