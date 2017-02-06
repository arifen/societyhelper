/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';*/
Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM-DD-YYYY');
});
