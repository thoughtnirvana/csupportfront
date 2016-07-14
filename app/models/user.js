import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import EmberValidations from 'ember-validations';

// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  validations: {
    'model.name': {
      presence: true,
      length: { minimum: 5, maximum: 50 }
    },
    'model.email': {
      presence: true,
      format: { with: /.+@.+\..{2,4}/ }
    },
  },
  name: attr('string'),
  email: attr('string'),
  role: attr('string'),
  password: attr('string')
});
