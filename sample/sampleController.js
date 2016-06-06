window.app = angular.module('sampleApp', []);

window.app.controller('sampleController', 
    ['$scope', 'translate',
        function ($scope, $translate) {
			
			
			//providing the multilingual data
			$translate.add("tr-TR", { WELCOME_HEADER : "Hosgeldiniz",   WELCOME_MESSAGE : "Bu bir ornektir."} );
			$translate.add("en-GB", { WELCOME_HEADER : "YOU'RE WELCOME", WELCOME_MESSAGE: "This is a sample."} );
			
			//loading the culture
			$translate.loadCulture("tr-TR");
			
			//querying the provider
			$scope.header = $translate.get("WELCOME_HEADER");
			$scope.message = $translate.get("WELCOME_MESSAGE");
				
		}]);

