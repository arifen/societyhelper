/**
 * Created by arifen on 2/7/17.
 */
 import {Meteor} from 'meteor/meteor';
Template.SideNav.events({
    'click #logout'(event,instance) {
        event.preventDefault();
        Meteor.logout(function () {

            FlowRouter.go('/');
        });
    }
});
