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
      { index: 8, indexp: 9, oe: "even" },
      { index: 9, indexp: 10, oe: "odd" },
      { index: 10, indexp: 11, oe: "even" },
      { index: 11, indexp: 12, oe: "odd" },
      { index: 12, indexp: 13, oe: "even" },
      { index: 13, indexp: 14, oe: "odd" },
      { index: 14, indexp: 15, oe: "even"},
      { index: 15, indexp: 16, oe: "odd" },
      { index: 16, indexp: 17, oe: "even" },
      { index: 17, indexp: 18, oe: "odd" },
      { index: 18, indexp: 19, oe: "even" },
      { index: 19, indexp: 20, oe: "odd" },
      { index: 20, indexp: 21, oe: "even" },
      { index: 21, indexp: 22, oe: "odd" }
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
