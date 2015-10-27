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
      var i = 0;
      var y = 450;
      var m = 10;
      var totalHeight = 500;
      var totalWidth = 500;
      for( i in poll.votes){
       if(maxVotes < poll.votes[i])
        maxVotes = poll.votes[i];
      }
      var barWidth = Math.floor((totalWidth - (n + 1) * m) / n);
      console.log(n,maxVotes, barWidth);
      
      ctx.font = "20px Arial";
      for(i = 0; i < n; i++){
       var x = 10 + barWidth * i + 10 * i;
       var barHeight =Math.floor((totalHeight * poll.votes[i]/maxVotes) -5 * m);
       ctx.fillStyle = "#FF0000";
       ctx.fillRect(x, barHeight - y, barWidth, barHeight);
       ctx.fillStyle = "#000000";
       ctx.fillText(poll.choices[i], x, totalHeight - m, barWidth);
       ctx.fillText(poll.votes[i], x + barWidth / 2, totalHeight / 2);
      }
   }
 }