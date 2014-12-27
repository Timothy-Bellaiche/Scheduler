Courses = new Mongo.Collection("courses");
Courses.initEasySearch('courseName', {
  'limit' : 20
});

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    courses: function () {
      return Courses.find({});
    },
    courseschecked: function () {
      return Courses.find({checked: true});
    }
  });

  Template.totals.helpers({
    totalhours: function() {
      var sumh=0;
      var cursor=Courses.find({checked: true});
      cursor.forEach(function(hours){
        sumh = sumh + trueEndTime - startTime
      });
      return sumh;
    },
    totalcredits: function() {
      var sumc=0;
      var cursor=Courses.find({checked: true});
      cursor.forEach(function(credits){
        sumc = sumc + credits
      });
      return sumc;
    }
  });

  Template.body.events({
  });

  Template.coursedesc.events({
    "click .toggle-checked": function () {
      Courses._collection.update(this._id, {$set: {checked: ! this.checked}});
    }
  });

  Template.coursescheckeddesc.events({
    "click .toggle-checked": function () {
      Courses._collection.update(this._id, {$set: {checked: ! this.checked}});
    }
  });
}
