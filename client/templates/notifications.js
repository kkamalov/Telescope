Template.notifications.helpers({
	notifications: function(){
		var user=Meteor.user();
		console.log(Meteor.user());
		if(!user.loading)
			return user.profile.notifications;
	}
});