/**
 * Created by arifen on 1/9/17.
 */
Template.registration.onCreated(function helloOnCreated() {
});

var onSuccess = function (err ,userId) {
    if(!err) {
    console.log('registration success');
        FlowRouter.go('/registrationsuccess');
    }else{
        FlowRouter.go('/register');
        console.log('registration error');
        //console.log('get error in inserting');
    }
};

Template.registration.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.registration.events({
    'submit #register-form'(event,instance) {
        event.preventDefault();
        /*console.log('user name '+event.target.reg_username.value);*/
        username = event.target.reg_username.value;
        email = event.target.reg_email.value;
        password = event.target.reg_password.value;
        confirmpassword =event.target.reg_password_confirm.value;
        fullname = event.target.reg_fullname.value;
        gender = event.target.reg_gender.value;
        agree = event.target.reg_agree.checked;
        /*console.log('check value '+agree);
        console.log('gender value '+gender);*/

        if(agree){/*
            console.log('agree true');
            console.log('pass '+password);
            console.log('confirm pass '+confirmpassword);
            console.log('check pass '+(password==confirmpassword));*/
            if(password==confirmpassword){
                console.log('password match ');
                var user = {
                    username,
                    email,
                    password,
                    profile: {
                        fullname,
                        gender
                    }
                };
                Meteor.call('createUsers', user, onSuccess);
            }else{
                console.log('password does not match ');
                FlowRouter.go("/");
            }
        }else{
            console.log('agree false ');
            FlowRouter.go("/");
        }
    }
});