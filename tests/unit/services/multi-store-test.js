import { moduleFor, test } from 'ember-qunit';

moduleFor('service:multi-store', 'Unit | Service | multi store', {});

test('it exists', function(assert) {
    let service = this.subject();
    assert.ok(service);
});

test('it starts empty', function(assert) {
    let service = this.subject();
    assert.deepEqual([], service.get('storeNames'));
    assert.notOk(service.isStoreRegistered('foo'));
    assert.notOk(service.getStore('foo'));
    assert.notOk(service.unregisterStore('foo'));
});

test('it can register new stores', function(assert) {
    let service = this.subject();
    assert.ok(service.registerStore('foo'));
    assert.deepEqual(['foo'], service.get('storeNames'));
    assert.ok(service.isStoreRegistered('foo'));
    assert.ok(service.getStore('foo'));
});

test('it can unregister stores', function(assert) {
    let service = this.subject();
    service.registerStore('foo');

    assert.ok(service.unregisterStore('foo'));
    assert.deepEqual([], service.get('storeNames'));
    assert.notOk(service.isStoreRegistered('foo'));
    assert.notOk(service.getStore('foo'));
});
