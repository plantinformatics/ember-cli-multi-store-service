import { moduleFor, test } from 'ember-qunit';

moduleFor('service:multi-store', 'Unit | Service | multi store', {});

test('it exists', function(assert) {
    let service = this.subject();
    assert.ok(service);
});

test('it starts empty', function(assert) {
    let service = this.subject();
    assert.deepEqual([], service.get('storeNames'));
    assert.notOk(service.getStore('foo'));
});
