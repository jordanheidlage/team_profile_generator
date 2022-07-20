const Manager = require("../lib/Manager")
describe("Manager", () => {
    describe("test Manager's properties", () => {
        it("test all properties", () => {
            const manager = new Manager('Phil', 1, 'ploy@yahoo.com', 1212)

            expect(manager.officeNumber).toEqual(1212)


        })

    })

    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const manager = new Manager('brian', 2, 'brian@yahoo.com', 1212)
            expect(manager.getofficeNumber()).toEqual(1212)

            expect(manager.getRole()).toEqual('Manager')
        })
    })
})