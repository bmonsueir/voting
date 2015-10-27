 if (Meteor.isClient) {
 
       var poll = [];
       var currentPoll;
       Template.viewvote.helpers({
          polls: function(){
          currentPoll = Router.current().params;
          poll = Polls.findOne({'_id':currentPoll._id});
          return poll;
           }
       });

Template.viewvote.events({
     'click #deleteRecord': function(event){
       var user = Meteor.userId();
       if(user === poll.createdBy){
         Polls.remove({_id: poll._id});
        } else{
        alert("Only the creator can delete a poll");
        }
     }
    });
    
    Template.viewvote.rendered =function(){
      var canvas = document.getElementById("theResults");
      var ctx = canvas.getContext("2d");
      var n = poll.votes.length;
      var maxVotes = 0;
      for(var i in poll.votes){
       if(maxVotes < poll.votes[i])
        maxVotes = poll.votes[i];
      }
      var barWidth = (490-10*n)/n;
      console.log(n,maxVotes, barWidth);
      ctx.fillStyle = "#FF0000";
      ctx.font = "20px Arial";
      for(i = 0; i < n; i++){
       var x = 10 + barWidth * i + 10 * i;
       var barHeight = 400 * poll.votes[i]/maxVotes;
       ctx.fillRect(x, 450, barWidth, barHeight);
       ctx.fillText(poll.choices[i], x, 250);
      }
     
     
   }
 }