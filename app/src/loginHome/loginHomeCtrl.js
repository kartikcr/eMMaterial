(function(){

  angular
       .module('loginHome')
       .controller('loginHomeCtrl', [
          'loginHomeService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams','$window',
          LoginHomeCtrl
       ]);

  function  LoginHomeCtrl( loginHomeService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams,$window) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    
    	$log.info("Inside load of captureApplicationCtrl ");
    
    	
    	   
    	     
    	     
    }
    $scope.forgotPass = function () {
     	 $window.alert(" Password :abc");
     	
     };
     $scope.login = function (userName, pass){
  		 if ( userName === 'abc' && pass === 'abc') 
  		 {
  			 $state.go('schoolSignup');
  			
  		 }
  		 else {
  			$scope.error="Invalid UserName & password";
  		
  			 }
    	  
   		 
  	  };
    
     $scope.rememberPass = function () {
         if ($scope.rememberMe) {
             $window.alert("User Name: abc Password :abc");
         } else {
             $window.alert("CheckBox is not checked.");
         }
     };  
    
    

  }

})();
