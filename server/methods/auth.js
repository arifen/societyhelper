import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
    'createUsers'(user) {
        check(user, {
            username: String,
            email: String,
            password: String,
            profile: {
                fullname: String,
                gender: String
            }
        });

        var id = Accounts.createUser(user);
        return id;
    },
    'peopleDonateProductInsert'(id,desc,type){
        PeopleProduct.insert({
            peopleid:id,
            productdes:desc,
            userType: type,
            createdAt: new Date(),
        });
    },
    'peopleNeedProductInsert'(id,desc,type){
        PeopleProduct.insert({
            peopleid:id,
            productdes:desc,
            userType: type,
            createdAt: new Date(),
        });
    }
});