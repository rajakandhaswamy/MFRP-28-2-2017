var page2 = angular.module("page2app",[]);
page2.controller("pagecontroller", function($scope, $http){
		 $scope.Submit = function() {
		console.log($scope.firstName);
		if(!$scope.input){
			alert("Please Submit your details completely");
		}
		else if(!$scope.input.firstName){
			alert("Please Enter valid Name [A-Z]");
		}
		else if(!$scope.input.lastName){
			alert("Please Enter valid Name [A-Z]");
		}else if(!$scope.input.currentAddress){
			alert("Please Enter valid Address1");
		}
		else if(!$scope.input.currentAddress2){
			alert("Please Enter valid Address ");
		}
		else if(!$scope.input.city){
			alert("Please Enter valid city ");
		}
		else if(!$scope.input.State){
			alert("Please Enter valid State ");
		}
		else if(!$scope.input.ZIP){
			alert("Please Enter valid ZIP ");
		}
		else if(!$scope.input.Phone){
			alert("Please Enter valid Number ");
		}
		else if(!$scope.input.Email){
			alert("Please Enter valid Email ");
		}

		else{

		$http.post("/data",$scope.input)
			.then(function(response) {
				refresh();
			});
		}
	};
	var refresh = function() {
	$http.get('/data').then(function(response) {
		$scope.inputlist = response.data;
		$scope.input = {};
	});
};
refresh();
});