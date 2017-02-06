/**
 * Created by arifen on 1/19/17.
 */
Template.take.events({
    'submit #need-form'(event,instance) {
        event.preventDefault();
        console.log('product name '+event.target.productname.value);
        console.log('user id '+Meteor.userId());
        Meteor.call('peopleNeedProductInsert', Meteor.userId(),event.target.productname.value,'N', function(err){
            if(!err){
                console.log('product inserted');
                FlowRouter.go('/takeproductsuccess');
            }else{
                FlowRouter.go('/takeproducterror');
                console.log('product does not inserted');
            }

        });
    }
});