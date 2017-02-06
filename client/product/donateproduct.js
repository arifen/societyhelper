/**
 * Created by arifen on 1/18/17.
 */
Template.donate.events({
    'submit #donate-form'(event,instance) {
        event.preventDefault();
        console.log('product name '+event.target.productname.value);
        console.log('user id '+Meteor.userId());
        Meteor.call('peopleDonateProductInsert', Meteor.userId(),event.target.productname.value,'D', function(err){
            if(!err){
                console.log('product inserted');
                FlowRouter.go('/giveproductsuccess');
            }else{
                FlowRouter.go('/giveproducterror');
                console.log('product does not inserted');
            }

        });
    }
});
