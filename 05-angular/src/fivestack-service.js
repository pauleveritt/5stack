var service = angular.module("fivestack-service", []);


service.service("fivestack", function () {
    this.counter = 0;
    this.getName = function (name) {
        this.counter += 1;
        return name + " Smith";
    }
});
