/**
 * Created by arifen on 1/20/17.
 */

import { PeopleProduct } from '../../collections/peoplemeet';

Template.showdonar.onCreated(function(){
   Meteor.subscribe('peopleProductCollection');
   Meteor.subscribe('usersCollection');
});

Template.showdonar.helpers({
    productDonars: function(){
        return PeopleProduct.find({userType:'D'});
    },
    donarCheck: function(type){
        return type === 'D';
    },
    userEmailAddress: function(id){
        return Meteor.users.findOne({_id:id});
    },
});

