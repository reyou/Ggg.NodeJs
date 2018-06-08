/* Chakram is an API testing framework designed to perform end to end tests on JSON REST endpoints. */
/* Chakram offers a BDD testing style through Chakram's expect interface. */

var chakram = require('chakram');
var expect = chakram.expect;

// simple response
describe("Chakram", function () {
    it("should offer simple HTTP request capabilities", function () {
        var response = chakram.get("http://httpbin.org/get");
        return response;
    });
});

// response 200
describe("Chakram", function () {
    it("should provide HTTP specific assertions", function () {
        var response = chakram.get("http://httpbin.org/get");
        var response = expect(response).to.have.status(200);
        return response;
    });
});

describe("HTTP assertions", function () {
    it("should make HTTP assertions easy", function () {
        var response = chakram.get("http://httpbin.org/get?test=chakram");
        expect(response).to.have.status(200);
        expect(response).to.have.header("content-type", "application/json");
        expect(response).not.to.be.encoded.with.gzip;
        expect(response).to.comprise.of.json({
            args: { test: "chakram" }
        });
        var waitedResponse = chakram.wait();
        return waitedResponse;
    });
});

// wait for response
describe("Chakram", function () {
    it("should provide a simple async testing framework", function () {
        var response = chakram.get("http://httpbin.org/get");
        expect(response).to.have.status(200);
        expect(response).not.to.have.header('non-existing-header');
        var waitedResponse = chakram.wait();
        return waitedResponse;
    });
});

// Complex Promise Use
// https://github.com/request/request#requestoptions-callback
// Simplified HTTP request client.
describe("Chakram", function () {
    it("should support sequential API interaction", function () {
        var requestParams = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
            }
        };
        var response = chakram.get("https://api.github.com/", requestParams)
            .then(function (apiResponse) {
                var emojisUrl = apiResponse.body.emojis_url;
                var response = chakram.get(emojisUrl, requestParams);
                return response;
            })
            .then(function (emojiList) {
                var cinema = emojiList.body.cinema;
                expect(cinema).to.contain("images/icons/emoji");
            });
        return response;
    });
});

describe("BDD + Hooks", function () {
    var thingName;
    before("post dweet", function () {
        thingName = "chakramtest" + Math.floor(Math.random() * 2000);
        var postResponse = chakram.post("https://dweet.io/dweet/for/" + thingName, {
            testing: "your API"
        });
        return postResponse;
    });

    it("should support getting latest dweet", function () {
        var postedData = chakram.get("https://dweet.io/get/latest/dweet/for/" + thingName);
        return expect(postedData).to.have.json('with[0].content', {
            testing: "your API"
        });
    });

    after("update dweet with result", function () {
        return chakram.post("https://dweet.io/dweet/for/" + thingName, {
            testing: "passed"
        });
    });
});

// add new property
describe("Extensibility", function () {
    before("define teapot", function () {
        chakram.addProperty("teapot", function (respObj) {
            var statusCode = respObj.response.statusCode;
            this.assert(statusCode === 418,
                'expected status code ' + statusCode + ' to equal 418',
                'expected ' + statusCode + ' to not be equal to 418');
        });
    });

    it("should be able to detect teapots", function () {
        var notATeapot = chakram.get("http://httpbin.org/status/200");
        var aTeapot = chakram.get("http://httpbin.org/status/418");
        expect(notATeapot).to.not.be.teapot;
        expect(aTeapot).to.be.teapot;
        var waitedResponse = chakram.wait();
        return waitedResponse;
    });
});