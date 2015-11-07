import Ember from 'ember';

export function formatDate(params/*, hash*/) {
    var date = params[0];
    return moment(date).format('LL');
}

export default Ember.Helper.helper(formatDate);
