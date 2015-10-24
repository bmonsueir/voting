Router.configure({
    layoutTemplate:'layout'
    
});

Router.map(function(){
   
    this.route('signup', {path:'/signup'});
    this.route('login', {path:'/login'});
    this.route('home', {path:'/'});
    this.route('about', {path:'/about'});
    this.route('viewpolls', {path:'/viewpolls'});
    this.route('takepoll', {path:'/takepoll'});
    this.route('viewvote', {path:'/viewvote'});
    this.route('addpoll', {path:'/addpoll'});
   
});

