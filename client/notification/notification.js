/**
 * Created by arifen on 1/26/17.
 */
import { PeopleProduct } from '../../collections/peoplemeet';

Template.notification.onCreated(function(){
    Meteor.subscribe('peopleProductCollection');
    Meteor.subscribe('usersCollection');
});
 Template.notification.events({

    'click .donarnoti':function(){
        Meteor.call('sendEmailtoTakker',function(err,res){
            if(!err){
                res.forEach(function(emailaddress){
                    Meteor.call('sendEmail',emailaddress,'sarifenju@gmail.com','donar found ','Somebody wants to donate your' +
                        ' needed product');
                });
                alert('taker message has been send');
            }

        });
    },
     'click .takernoti':function(){
         console.log("taker click");
     }
 });
