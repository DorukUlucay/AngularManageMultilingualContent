# AngularManageMultilingualContent
This angular provider allows you to manage multilingual content.

Description of "add" function
--------------

1. parameter : required
 - tr-TR
 - en-GB
 - ...
 
2. parameter : required (Object or JSON String)
 -  { DIALOGS_OK : 'OK', DIALOGS_NOK : 'NOK'}
 - '{'DIALOGS_OK': 'OK','DIALOGS_NOK': 'NOK'}'
 
3. parameter : optional (default true) (Will overwrite if the destination key exists) 
 
 **Example Usage**
```javascript
function exampleController($scope, $translate) {

    $scope.init = function (cultureName, cultureValues) {
        $translate.add(cultureName, cultureValues);
    };

};

exampleController.$inject = ['$scope', 'translate'];

window.app.controller("exampleController", exampleController);
```
Description of "loadCulture" function
--------------
*Sets the default culture*

1. parameter : required
 - tr-TR
 - en-GB
 - ...

 **Example Usage**
```javascript
function exampleController($scope, $translate) {

    $scope.init = function (cultureName) {
        $translate.loadCulture(cultureName);
    };

};

exampleController.$inject = ['$scope', 'translate'];

window.app.controller("exampleController", exampleController);
```

Description of "get" function
--------------
*Gets a value from default culture using a key*

1. parameter : required
 - 'DIALOGS_OK'
 - ...

 **Example Usage**
```javascript
function exampleController($scope, $translate) {

    $scope.init = function (cultureName, cultureValues) {
        var value = $translate.get('DIALOGS_OK');
    };

};

exampleController.$inject = ['$scope', 'translate'];

window.app.controller("exampleController", exampleController);
```
