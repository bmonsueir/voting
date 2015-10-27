

if (Meteor.isClient) {
  var poll = [];
  Template.viewpolls.helpers({
      questions: function () {
       poll = Polls.find().fetch();
        return  poll;
      }
    });
    
    Template.viewpolls.events({
      'click .vote': function(e){
        var user = Meteor.userId();
         poll = Polls.findOne({_id:this._id});
        if($.inArray(user, poll.voters)> -1){
          Router.go('viewvote',{_id: this._id});
        } else{
          Router.go('takepoll',{_id: this._id});
        }
      }
      
    })
    
}