import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('new');
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('tickets', function() {
    this.route('new');
    this.route('edit', { path: '/:ticket_id/edit' });
  });
  this.route('login');
});

export default Router;
