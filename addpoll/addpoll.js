Polls = new Mongo.Collection('polls');

if (Meteor.isClient) {
  
 var choice = [];
 var choiceDep = new Tracker.Dependency();
  Template.addpoll.helpers({
      choices: function () {
        choiceDep.depend();
        return choice;
      }
    });
    
  
   // add new choice to page 
   Template.addpoll.events({
      "submit .new-choice": function (event) {
        event.preventDefault();
        
       
       if (event.target.choice.value){
        choice.push(event.target.choice.value);
        choiceDep.changed();
      }
        event.target.choice.value = "";
        }
    
  });
  
  // add new poll to database
   Template.addpoll.events({
     "click #addapoll": function(event){
      console.log(Meteor.userId());
    var question = $('[name=question]').val();
   if(question && choice.length>1){
     var votes = [];
     var voters = [];
     var user = Meteor.userId();
     for(var i in choice) votes.push(0);
    Polls.insert({
            createdBy: user,
            question: question,
            choices: choice,
            votes: votes,
            voters: voters,
            createdAt: new Date() // current time
          });
          choice = [];
          question = '';
          Router.go('home');
   }
   }
     });
     
     
   
}
  