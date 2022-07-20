const Engineer = require("../lib/Engineer")
describe("Engineer", () => {
    describe("test Engineer's properties", () => {
        it("test all properties", () => {
            const engineer = new Engineer('Phil', 1, 'ploy@yahoo.com', 'jheidlage@github.com')

            expect(engineer.github).toEqual('jheidlage@github.com')
            expect(engineer.getGithub()).toEqual('jheidlage@github.com')

        })

    })
})