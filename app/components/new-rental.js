import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions:{
    rentalFormShow : function(){
      this.set('addNewRental',true);
    },
    saveRental : function(){
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        address: this.get('address'),
        date_added: Date.now()
      };
      this.set('addNewRental', false);
      this.sendAction('saveRental', params);
    }
  }
});
