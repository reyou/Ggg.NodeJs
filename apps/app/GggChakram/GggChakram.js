// https://github.com/dareid/chakram
// http://dareid.github.io/chakram/
// https://mochajs.org/
// https://github.com/dareid/chakram/tree/master/examples   
// Chakram is an API testing framework designed to perform end to end tests on JSON REST endpoints.
// Chakram is built on node.js, mocha, chai and request.
//=============================================================================
var chakram = require('chakram');
var expect = chakram.expect;
//=============================================================================
describe("Chakram", function () {
    it("should offer simple HTTP request capabilities", function () {
        return chakram.get("http://httpbin.org/get");
    });
});
//=============================================================================
// http://dareid.github.io/chakram/jsdoc/module-chakram-expectation.html
// http://chaijs.com/api/bdd/
describe("Chakram", function () {
    it("should provide HTTP specific assertions", function () {
        var response = chakram.get("http://httpbin.org/get");
        return expect(response).to.have.status(200);
    });
});
//=============================================================================
// Below is a test using the wait method.
describe("Chakram", function () {
    it("should provide a simple async testing framework", function () {
        var response = chakram.get("http://httpbin.org/get");
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');
        // This returns a promise which will be fulfilled once all assertions 
        // have been performed. 
        return chakram.wait();
    });
});
//=============================================================================
// Complex Promise Use
// https://github.com/dareid/chakram#complex-promise-use
// https://developer.spotify.com/my-applications/#!/applications/484b2b78b1b04218aca17a9b8e8bccfe
// Client ID 484b2b78b1b04218aca17a9b8e8bccfe
// Client Secret e6108e0a5ba947518b43e8da201619cb
describe("Chakram", function () {
    it("should support sequential API interaction", function () {
        var artist = "Notorious B.I.G.";
        return chakram.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist")
            .then(function (searchResponse) {
                var bigID = searchResponse.body.artists.items[0].id;
                return chakram.get("https://api.spotify.com/v1/artists/" + bigID + "/top-tracks?country=GB");
            })
            .then(function (topTrackResponse) {
                var topTrack = topTrackResponse.body.tracks[0];
                expect(topTrack.name).to.contain("Old Thing Back");
            });
    });
});
//=============================================================================
// lp; 
//=============================================================================
