import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions:{
    cityFormShow: function(){
      this.set('addNewCity', true);
    },
    submit: function(){
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
        country: this.get('country')
      };
      this.sendAction('action',params);
      this.set('addNewCity', false);
    }
  }
});
