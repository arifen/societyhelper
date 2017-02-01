import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    process.env.MAIL_URL = 'smtp://' +'sarifenju'+':'+'2155454'+'@'+'smtp.gmail.com'+':'+'465';
});
