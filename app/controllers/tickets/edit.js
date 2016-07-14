/*global $ */
import Ember from 'ember';

export default Ember.Controller.extend({
  status: null,
  allstatus: Ember.String.w('Open InProgress Closed'),
  actions: {
    selectStatus(status) {
      $('#curstatus').val(status);
    },
  }
});
