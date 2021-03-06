import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      skills: this.store.findAll('skill'),
      misconceptions: this.store.findAll('misconception')
    });
  },
  setupController(controller, model) {
    var skillData = [];
    var misconceptionData = [];

    model.skills.forEach(function(item) {
      skillData.push({
        label: item.get('label'),
        value: item.get('value'),
        id: item.get('id')
      });
    });

    model.misconceptions.forEach(function(item) {
      misconceptionData.push({
        label: item.get('label'),
        value: item.get('value'),
        id: item.get('id')
      });
    });

    controller.set("skill-data", skillData);
    controller.set("misconception-data", misconceptionData);
  }
});
