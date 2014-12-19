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

  Template.body.events({
    $(".course").mouseover(function() {
      $(this).children(".details").show();
      }).mouseout(function() {
      $(this).children(".details").hide();
      });
  });

  Template.coursedesc.events({
    "click .toggle-checked": function () {
      Courses._collection.update(this._id, {$set: {checked: ! this.checked}});
    }
  })

  Template.coursescheckeddesc.events({
    "click .toggle-checked": function () {
      Courses._collection.update(this._id, {$set: {checked: ! this.checked}});
    }
  })
}
