Router.configure({
    layoutTemplate:'layout'
    
});

Router.map(function(){
   
    this.route('signup', {path:'/signup'});
    this.route('login', {path:'/login'});
    this.route('home', {path:'/'});
    this.route('about', {path:'/about'});
    this.route('viewpolls', {path:'/viewpolls'});
    this.route('viewvote', {
        template: 'viewvote',
        path:'/viewvote/:_id',
        data: function(){
            return Polls.findOne(this.params._id);
        }
    });
    this.route('addpoll', {path:'/addpoll'});
    this.route('takepoll', {
        template: 'takepoll',
        path:'/takepoll/:_id',
        data: function(){
            return Polls.findOne(this.params._id);
        }
    });
});

