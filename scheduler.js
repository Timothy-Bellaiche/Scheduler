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
      cursor.forEach(function(summing){
        sumh = sumh + summing.trueEndTime - summing.startTime
      });
      return sumh;
    },
    totalcredits: function() {
      var sumc=0;
      var cursor=Courses.find({checked: true});
      cursor.forEach(function(summing){
        sumc = sumc + summing.credits
      });
      return sumc;
    }
  });

  Template.schedule.helpers({
    trschedules: [
      { index: 8, indexp:9 },
      { index: 9 },
      { index: 10 },
      { index: 11 },
      { index: 12 },
      { index: 13 },
      { index: 14 },
      { index: 15 },
      { index: 16 },
      { index: 17 },
      { index: 18 },
      { index: 19 },
      { index: 20 },
      { index: 21 }
    ]
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
