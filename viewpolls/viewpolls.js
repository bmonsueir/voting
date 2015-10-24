

if (Meteor.isClient) {
  
 var questions = [];
 var questionsDep = new Tracker.Dependency();
  Template.viewpolls.helpers({
      questions: function () {
        questionsDep.depend();
        var poll = {};
        poll = Polls.find().fetch();
        for(var i in poll){
        questions.push( poll[i].question);
      }
        console.log(questions);
        return questions;
      }
    });
    
    Template.viewpolls.events({
      'click .delete': function(){
        
        Polls.remove(this._id);
        questionsDep.changed();
      }
      
    })
    
}