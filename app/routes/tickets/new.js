import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('ticket');
  },

  actions: {
    saveTicket(newTicket) {
      newTicket.save().catch((reason) => {
        this.set('errorMessage', reason.errors[0] || reason);
      }).then(() => this.transitionTo('/'));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});