window.app.filter('translate', ['translate', function ($translate) {
    return function (key) {
        return $translate.get(key);
    };
}]);