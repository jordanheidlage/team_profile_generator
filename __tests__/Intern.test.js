const Intern = require("../lib/Intern")
describe("Intern", () => {
    describe("test Intern's properties", () => {
        it("test all properties", () => {
            const intern = new Intern('Phil', 1, 'ploy@yahoo.com', 'Ohio State')

            expect(intern.school).toEqual('Ohio State')
            expect(intern.getSchool()).toEqual('Ohio State')

        })

    })
})