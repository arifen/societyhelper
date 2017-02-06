/**
 * Created by arifen on 2/2/17.
 */
let emailSending= ( emails,subject,body, promise ) => {
    emails.forEach(function(emailaddress){
        try{
            Meteor.call('sendEmail',emailaddress,'sarifenju@gmail.com',subject,body/*'donar found ','Somebody wants to
             donate your' +
                ' needed product'*/);
            console.log("EMAL SENT.....");
        }catch(exception){
            promise.error('email send error');
        }
    });
    promise.response('Email Send Successfully');
};



Meteor.methods({
    'emailSendPromise':function (emails,subject,body){
        return new Promise( ( resolve, reject ) => {
            emailSending( emails,subject,body, { response: resolve, error: reject } );
        });
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);
        this.unblock();
        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }

});