import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    saveUser(newUser) {
      newUser.save().catch((reason) => {
        this.set('errorMessage', reason.errors[0] || reason);
      }).then(() => this.transitionTo('/users'));
    },
  }
});