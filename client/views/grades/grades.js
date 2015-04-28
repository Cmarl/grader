'use strict';

angular.module('grader')
.controller('GradeCtrl', function($scope, Grade){
  var afCourses = $scope.afCourses = Grade.init();
  afCourses.$loaded().then(showCourses);

  function showCourses(){
    $scope.courses = afCourses;
  }

  $scope.addCourse = function(course){
    Grade.addCourse(course);
  };

  $scope.addTest = function(test){
    Grade.addTest(test);
  };

  $scope.deleteTest = function(test){

  };


  $scope.editTest = function(test){

  };

});
