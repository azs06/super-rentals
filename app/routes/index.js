import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      cities: this.store.findAll('city')
    });
  },
  actions:{
    save3 : function(params){
    var newRental = this.store.createRecord('rental',params);
     newRental.save();
     this.transitionTo('index');
    },
    update: function(rental,params){
      var _this = this;
      Object.keys(params).forEach(function(key) {
        if(params[key]!== undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save().then(function(){
        _this.transitionTo('index');
      }).catch(function(resp){
        console.log(resp);
      });

    },
    saveCity: function(params){
      var newCity = this.store.createRecord('city',params);
      newCity.save();
      this.transitionTo('index');
    },
    updateCity: function(updatedcity){
        var _this = this;
        updatedcity.save().then(function(){
            _this.transitionTo('index');
        });
    },
    destroyRental: function(rental){
      rental.destroyRecord().then(function(){
          //city.save();
      });
      this.transitionTo('index');
    },
    deleteCity: function(city){
        var _this = this;
        var rental_deletions = city.get('rentals').map(function(rental) {
            return rental.destroyRecord();
        });

        if(confirm('Are you sure you want to delete this?')){
            Ember.RSVP.all(rental_deletions).then(function() {
                return city.destroyRecord();
            });

            _this.transitionTo('index');
        }

    }
  }
});


