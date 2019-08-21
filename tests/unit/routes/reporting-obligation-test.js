import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | reporting-obligation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:reporting-obligation');
    assert.ok(route);
  });
});
