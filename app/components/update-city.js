import Ember from 'ember';

export default Ember.Component.extend({
    isUpdateEnabled: false,
    actions:{
        enableUpdate: function(){
            this.set('isUpdateEnabled', true);
        },
        update: function(updatedcity){
            this.set('isUpdateEnabled', false);
            this.sendAction('updateCity',updatedcity);
        },
        cancelUpdate: function(updatedcity){
            this.set('isUpdateEnabled', false);
            updatedcity.rollbackAttributes();
        }
    }
});
