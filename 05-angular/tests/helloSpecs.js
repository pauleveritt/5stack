describe("5stack Service", function () {

    var fivestack;

    beforeEach(module("fivestack-service"));

    beforeEach(inject(function (_fivestack_) {
        fivestack = _fivestack_;
    }));

    it("should have counter and getName", function () {
        expect(fivestack.counter).toBeDefined();
        expect(fivestack.getName).toBeDefined();
    });

    it("should append Smith to string", function () {
        expect(fivestack.counter).toBe(0);
        expect(fivestack.getName("John")).toBe("John Smith");
        expect(fivestack.counter).toBe(1);
    });

});