/*import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';*/
Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM-DD-YYYY');
});

/*'click .donarnoti':function(){
    console.log('come 11==');
    Meteor.call('sendEmailtoTakker',function(err,res){
        console.log('come 11==');
        if(!err){
            /!* console.log('come log herer');*!/
            res.forEach(function(emailaddress){
                Meteor.call('sendEmail',emailaddress,'sarifenju@gmail.com','donar found ','Somebody wants to donate your' +
                    ' needed product');
            });
            alert('taker message has been send');
            /!* console.log(typeof emailSendPromise);
             emailSendPromise(res).then((response)=>{
             alert(response);
             }).catch((error)=>{
             alert('error happen');
             });*!/
        }else{
            console.log('come 2');
        }
    });*/
