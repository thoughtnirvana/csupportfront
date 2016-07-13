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
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});