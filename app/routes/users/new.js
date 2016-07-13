import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    saveUser(newUser) {
      $.ajax({
        type: "POST",
        url: "/auth",
        data: { name: $("#name").val(), email: $("#email").val(), password: $("#password").val() }
      }).then(() => this.transitionTo('/users'));
    }
  }

  // actions: {
  //   saveUser(newUser) {
  //     newUser.save().catch((reason) => {
  //       this.set('errorMessage', reason.errors[0] || reason);
  //     }).then(() => this.transitionTo('/'));
  //   },
  //   willTransition() {
  //     // rollbackAttributes() removes the record from the store
  //     // if the model 'isNew'
  //     this.controller.get('model').rollbackAttributes();
  //   }
  // }
});