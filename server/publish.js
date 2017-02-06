/**
 * Created by arifen on 1/20/17.
 */
 import {PeopleProduct } from '../collections/peoplemeet';
 //import {Users} from '../collections/peoplemeet'

Meteor.publish('peopleProductCollection', function(){
    return PeopleProduct.find({});
});

Meteor.publish('usersCollection', function(){
    //return Users.find({});
    return Meteor.users.find();
});