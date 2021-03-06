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
        Meteor.call('sendEmailtoDonar',function(err,res){
            if(!err){
                Meteor.call('emailSendPromise', res,'Donar Notification','Somebody wants your donate Product', function (err,response) {
                     if(!err){
                        alert(response);
                     }else {
                         alert(err);
                     }
                });
            }

        });
    },
     'click .takernoti':function(){
         Meteor.call('sendEmailtoTakker',function(err,res){
             if(!err){
                 Meteor.call('emailSendPromise', res,'Takker Notification','Somebody wants to donate your needed product', function (err,response) {
                     if(!err){
                         alert(response);
                     }else {
                         alert(err);
                     }
                 });
             }

         });
     }
 });
