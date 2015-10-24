if (Meteor.isClient) {

Template.signup.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
            if(error){
                alert(error.reason);
            }else{
                 Router.go('home');
            }    
        })
    }
});

Template.navigation.events({
    'click .logout': function(event){
      event.preventDefault();
    Meteor.logout();
    Router.go('login');
    }
    
})

Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email,password, function(error){
           if(error) {
            alert(error.reason);
           } else{
            Router.go('home');
           }
            
        });
        
    }
});

}
