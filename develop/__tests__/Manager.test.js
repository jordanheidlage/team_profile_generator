const Manager = require("../lib/Manager")
describe("Manager", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const manager = new Manager('Phil', 1, 'ploy@yahoo.com')

            expect(manager.name).toEqual('Phil')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('ploy@yahoo.com')

        })

    })

    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const manager = new Manager('brian', 2, 'brian@yahoo.com')
            expect(manager.getName()).toEqual('brian')
            expect(manager.getId()).toEqual(2)
            expect(manager.getEmail()).toEqual('brian@yahoo.com')
            expect(manager.getRole()).toEqual('Employee')
        })
    })
})