(function () {
    HomeController.$inject = [];
    function HomeController() {
        var HC = this;
        HC.mailcheckOptions = {
            'Hi': "hiii",
            "topLevelDomains": ['co.in'],
            "replaceOptions": false
        };
        HC.mailcheckOptions1 = {
            'Hi': "Byee",
            "topLevelDomains": ['me'],
            "replaceOptions": true
        };
    }

    angular
        .module('myApp')
        .controller('HomeController', HomeController);
} ());