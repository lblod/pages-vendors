import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editor-iframe-integration', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editor-iframe-integration');
    assert.ok(route);
  });
});
