import Ember from 'ember';

export default Ember.Component.extend({
  updateRentalForm: false,
  actions:{
    updateRentalForm: function(){
      this.set('updateRentalForm', true);
    },
    update: function(rental){
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        address: this.get('address')
      };

      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    },
    cancelUpdate:function(){
      this.set('updateRentalForm', false);
    }
  }
});
