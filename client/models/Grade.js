'use strict';

angular.module('grader')
.factory('Grade',function($rootScope, $firebaseArray, $firebaseObject, $window){
  var fbUser;
  var afUser;
  var afCourses;
  var fbCourses;
  var fbCourse;
  var afCourse;

  function Grade(){
  }

  Grade.init = function(){
    fbUser = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid);
    afUser = $firebaseArray(fbUser);
    fbCourses = fbUser.child('/courses/');
    afCourses = $firebaseArray(fbCourses);
    return afCourses;
  };

  Grade.addCourse = function(course){
    afCourses.$add(course);
  };

  Grade.addTest = function(test){
    fbCourse = fbUser.child('/tests/' + test.course);
    afCourse = $firebaseArray(fbCourse);

    var courseWork = angular.copy(test);
    courseWork.date = courseWork.date.getTime();
    courseWork.createdAt = $window.Firebase.ServerValue.TIMESTAMP;

    afCourse.$add(courseWork);
  };

  return Grade;
});
