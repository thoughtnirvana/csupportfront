import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model() {
    return this.get('store').findAll('ticket');
  },

  actions: {

    deleteTicket(ticket) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        ticket.destroyRecord();
      }
    },
    dlpdf() {
      var doc = new jsPDF('p', 'pt');
      var elem = document.getElementById("tickets-table");
      var res = doc.autoTableHtmlToJson(elem);
      doc.autoTable(res.columns, res.data);
      doc.save("table.pdf");
    }
  }
});