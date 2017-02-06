/*if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);*/


FlowRouter.route('/', {
	name: 'index',
	action: function () {
		BlazeLayout.render('HomeLayout', {content: 'login'});
	}

});

FlowRouter.route('/register', {
	name: 'registration',
	action: function () {
		BlazeLayout.render('HomeLayout', {content: 'registration'});
	}

});


FlowRouter.route('/forgetpassword', {
	name: 'forgetpassword',
	action: function () {
		BlazeLayout.render('HomeLayout', {content: 'forgetpass'});
	}

});

FlowRouter.route('/registrationsuccess', {
	name: 'registrationsuccess',
	action() {
		BlazeLayout.render('HomeLayout', {content: 'registrationsuccess'});
	}
});

FlowRouter.route('/home', {
	action() {
		BlazeLayout.render('MainLayout');
	}
});
FlowRouter.route('/giveproduct', {
	name: 'donateproduct',
	action() {
		BlazeLayout.render('MainLayout', {content: 'donate'});
	}
});
FlowRouter.route('/giveproductsuccess', {
	name: 'donateproductsuccess',
	action() {
		BlazeLayout.render('MainLayout', {content: 'donatesuccessful'});
	}
});
FlowRouter.route('/giveproducterror', {
	name: 'donateproducterror',
	action() {
		BlazeLayout.render('MainLayout', {content: 'error'});
	}
});
FlowRouter.route('/takeproduct', {
	name: 'needproduct',
	action() {
		BlazeLayout.render('MainLayout', {content: 'take'});
	}
});
FlowRouter.route('/takeproductsuccess', {
	name: 'needproductsuccess',
	action() {
		BlazeLayout.render('MainLayout', {content: 'takesuccessful'});
	}
});
FlowRouter.route('/takeproducterror', {
	name: 'needproducterror',
	action() {
		BlazeLayout.render('MainLayout', {content: 'error'});
	}
});
FlowRouter.route('/donarlist', {
	name: 'donarlist',
	action() {
		BlazeLayout.render('MainLayout', {content: 'showdonar'});
	}
});

FlowRouter.route('/takerlist', {
	name: 'takerlist',
	action() {
		BlazeLayout.render('MainLayout', {content: 'showtaker'});
	}
});

FlowRouter.route('/sendnotification', {
	name: 'sendnotification',
	action() {
		BlazeLayout.render('MainLayout', {content: 'notification'});
	}
});