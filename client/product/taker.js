/**
 * Created by arifen on 1/21/17.
 */

import { PeopleProduct } from '../../collections/peoplemeet';

Template.showtaker.onRendered(function(){
    Meteor.subscribe('peopleProductCollection');
});

Template.showtaker.helpers({
    productTakers: function(){
        return PeopleProduct.find({userType:'N'});
    },
    takerCheck: function(type){
        return type === 'N';
    },
    userEmailAddress: function(id){
        return Meteor.users.findOne({_id:id});
    },
});