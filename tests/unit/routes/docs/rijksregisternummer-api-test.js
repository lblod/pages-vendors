import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | docs/rijksregisternummer-api', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:docs/rijksregisternummer-api');
    assert.ok(route);
  });
});
