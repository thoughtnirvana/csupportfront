import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import EmberValidations from 'ember-validations';

// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend(EmberValidations, {
  validations: {
    'model.name': {
      presence: true,
      length: { minimum: 5, maximum: 50 }
    }
  },
  name: attr('string'),
  description: attr('string'),
  owner: attr('string'),
  curstatus: attr('string')
});
