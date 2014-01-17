var service = angular.module("fivestack-service", []);


service.service("fivestack", function ($http) {
    this.counter = 0;
    this.firstName = '';
    var self = this;
    this.getName = function (name) {
        this.counter += 1;
        return name + " Smith";
    };

    this.getFirstName = function () {
        $http.get('/data.json').then(function (response) {
            self.firstName = response.data.firstName;
        })
    };
});
