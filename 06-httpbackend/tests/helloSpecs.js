describe("5stack Service", function () {

    var fivestack, $rootScope, $httpBackend;

    beforeEach(module("fivestack-service"));

    beforeEach(inject(function (_$rootScope_, _$httpBackend_, _fivestack_) {
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
        fivestack = _fivestack_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should have counter and getName", function () {
        expect(fivestack.counter).toBeDefined();
        expect(fivestack.getName).toBeDefined();
        expect(fivestack.firstName).toBeDefined();
    });

    it("should append Smith to string", function () {
        expect(fivestack.counter).toBe(0);
        expect(fivestack.getName("John")).toBe("John Smith");
        expect(fivestack.counter).toBe(1);
    });

    it("should get a first name from REST", function () {
        var data = {"firstName": "bob"};
        $httpBackend.expectGET("/data.json").respond(data);
        fivestack.getFirstName();
        $httpBackend.flush();
        expect(fivestack.firstName).toBe('bob');
    });

});