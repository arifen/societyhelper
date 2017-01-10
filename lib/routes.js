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

/*
FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});
FlowRouter.route('/user-registration', {
	name: 'user-registration',
	action() {
	BlazeLayout.render('MainLayout', {main: 'UserRegiatration'});
	}
});
FlowRouter.route('/registered-successfully', {
	name: 'successful-registration',
	action() {
	BlazeLayout.render('MainLayout', {main: 'successfulregister'});
	}
});
FlowRouter.route('/aircraft-registration', {
	name: 'aircraft-registration',
	action() {
	BlazeLayout.render('MainLayout', {main: 'aircraft'});
	}
});
FlowRouter.route('/semd-email', {
	name: 'emailsend',
	action() {
	BlazeLayout.render('MainLayout', {main: 'email'});
}
});
FlowRouter.route('/semd-email-successful', {
	name: 'successful-sendemail',
	action() {
	BlazeLayout.render('MainLayout', {main: 'successfullyemailsend'});
}
});
FlowRouter.route('/file-uplad', {
	name: 'fileUpload',
	action() {
	BlazeLayout.render('MainLayout', {main: 'fileinput'});
}
});
FlowRouter.route('/profile',{
	subscriptions: function(params) {
		this.register('image', Meteor.subscribe('images'));
	},
	name: 'successfully-upladedfile',
	action() {
	BlazeLayout.render('MainLayout', {main: 'profile'});
	}
});*/
