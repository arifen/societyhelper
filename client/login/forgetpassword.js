/**
 * Created by arifen on 1/10/17.
 */
Template.forgetpass.onCreated(function helloOnCreated() {

});


Template.forgetpass.helpers({
});

Template.forgetpass.events({
    'submit #forgot-password-form'(event,instance) {
        event.preventDefault();
        email = event.target.fp_email.value;
        //password = event.target.lg_password.value;
        console.log('email '+email);
        var options = {};
        options.email = email;
        Accounts.forgotPassword(options, function(err){
            if (err) {
                console.log(err.reason);
            } else {
                console.log('Great success!');
            }
        });
    }
});