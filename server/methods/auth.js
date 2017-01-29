import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { PeopleProduct } from '../../collections/peoplemeet';



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
    },
    'donatePeopleList'(){
        return PeopleProduct.find({userType:'D'});
    },
    'takePeopleList'(){
        return fetchListByType('D');
    },
    'sendemail'(emailaddress){

    },
    'sendEmailtoTakker'(){
        var doanrs = fetchListByType('D');
        var takers = fetchListByType('N');
        var users;
        var emailAddresses = [];

        //return doanrs.fetch();
        doanrs.forEach( function (donar)
        {
            takers.forEach(function (taker){
                if(donar.productdes === taker.productdes){
                  //  console.log(taker.peopleid);
                  users=fetchListById(taker.peopleid);
                  emailAddresses.push(users.fetch()[0].emails[0].address);
                }
            });
        });

        return emailAddresses;
        /*emailAddress.forEach(function(arrayList){
            console.log(arrayList);
        });*/
    }
});