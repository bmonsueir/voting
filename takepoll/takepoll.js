   
   if (Meteor.isClient) {
       var poll = [];
       var currentPoll;
       Template.takepoll.helpers({
          polls: function(){
          currentPoll = Router.current().params;
          poll = Polls.findOne({'_id': currentPoll._id});
          return poll;
           }
       });
       
     Template.takepoll.events({
         'click .choose': function(event){
             var index = event.currentTarget.id;
             var user = Meteor.userId();
             poll.votes[index]++;
             Polls.update({'_id': poll._id},{$set: {'votes': poll.votes}, $push: {'voters': user}});
                Router.go('viewvote',{'_id': poll._id});
         }
         
     });
     
      Template.takepoll.events({
      'click .addChoice': function(event){
        var user = Meteor.userId();
        poll.votes[poll.votes.length] = 1;
        Polls.update({'_id': poll._id},{$set: {'votes': poll.votes}, $push:{'choices':$('[name=newchoice]').val()}});
        Polls.update({'_id': poll._id},{$push: {'voters': user}});
        Router.go('viewvote',{'_id': this._id});
      }
    });
    
    
     
   }