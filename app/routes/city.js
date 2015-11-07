import Ember from 'ember';

export default Ember.Route.extend({
    model:function(params){
        return this.store.findRecord('city',params.city_id);
    },
  actions:{
    saveRental: function(params){
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      console.log(city);
      console.log(city.get('rentals'));
      city.get('rentals').pushObject(newRental);
      console.log(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    }
  }
});
