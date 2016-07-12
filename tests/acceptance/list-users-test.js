import { test } from 'qunit';
import moduleForAcceptance from 'csupportfront/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list users');

test('visiting /users', function(assert) {
  visit('/users');

  andThen(function() {
    assert.equal(currentURL(), '/users');
  });
});

test('should list available usrs', function(assert) {
  visit('/users');
  andThen(function(){
    assert.equal(find('.user').length, 3, 'should see 3 users');
  });
});
