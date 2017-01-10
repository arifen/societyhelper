/**
 * Created by arifen on 1/10/17.
 */
Template.login.onCreated(function helloOnCreated() {

});


Template.login.helpers({
});

Template.login.events({
    'submit #login-form'(event,instance) {
        event.preventDefault();
        console.log('user name '+event.target.lg_username.value);
        username = event.target.lg_username.value;
        //email = event.target.reg_email.value;
        password = event.target.lg_password.value;
        //console.log(username);
        Meteor.loginWithPassword(username,password, function (err) {
             if (!err) {
                FlowRouter.go('/home');
             }else {
                 FlowRouter.go('/');
             }
         })
    }
});
