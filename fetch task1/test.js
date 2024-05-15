describe("getUsers", function () {

    it("gets users from GitHub", async function () {
        let users = await getUsers(['iliakan', 'remy', 'no.such.users']);
        console.log(users[0].login);
        assert.equal(users[0].login, 'iliakan');
        assert.equal(users[1].login, 'remy');
        assert.equal(users[2], null);
    });

});