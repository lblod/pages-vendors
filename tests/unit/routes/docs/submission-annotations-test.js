import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | docs/submission-annotations', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:docs/submission-annotations');
    assert.ok(route);
  });
});
