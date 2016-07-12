import { test } from 'qunit';
import moduleForAcceptance from 'csupportfront/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tickets');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should list available tickets.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.ticket').length, 3, 'should see 3 tickets');
  });
});

test('should link to home page.', function (assert) {
  visit('/');
  click('a:contains("Tickets")');
  andThen(function () {
    assert.equal(currentURL(), '/', 'should navigate to tickets');
  });
});

test('should link to users list.', function (assert) {
  visit('/');
  click('a:contains("Users")');
  andThen(function () {
    assert.equal(currentURL(), '/users', 'should navigate to users');
  });
});