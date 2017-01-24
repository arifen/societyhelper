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
		//GAnalytics.pageview();
		//alert("hello");
		console.log('this new message');
		/*BlazeLayout.render('HomeLayout');*/
		BlazeLayout.render('HomeLayout', {content: 'registrationsuccess'});
	}
});

FlowRouter.route('/home', {
	action() {
		//GAnalytics.pageview();
		//alert("hello");
		console.log('this new message');
		/*BlazeLayout.render('HomeLayout');*/
		BlazeLayout.render('MainLayout');
	}
});
FlowRouter.route('/giveproduct', {
	name: 'donateproduct',
	action() {
		BlazeLayout.render('MainLayout', {content: 'donate'});
	}
});

FlowRouter.route('/takeproduct', {
	name: 'needproduct',
	action() {
		BlazeLayout.render('MainLayout', {content: 'take'});
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
