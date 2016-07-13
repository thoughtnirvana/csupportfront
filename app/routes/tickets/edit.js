import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
  },

  actions: {
    saveTicket(newTicket) {
      newTicket.save().catch((reason) => {
        this.set('errorMessage', reason.errors[0] || reason);
      }).then(() => this.transitionTo('/'));
    },
  }
});