/*global $ */
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    saveUser() {
      $.ajax({
        type: "POST",
        url: "/auth",
        data: { name: $("#name").val(), email: $("#email").val(), password: $("#password").val() }
      }).then(() => this.transitionTo('/users'));
    }
  }
});