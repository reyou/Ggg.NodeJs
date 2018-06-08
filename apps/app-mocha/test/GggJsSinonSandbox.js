var fs = require('fs');
var sinon = require("sinon");
var chakram = require('chakram');
var expect = chakram.expect;

var writeFileStub = sinon.stub(fs, 'writeFile', function (path, data, cb) {
    return cb(null);
});
describe('Sinon File Caller', function () {
    it("Sinon should call file", function () {
        expect(writeFileStub).to.be.called;
    });
});
writeFileStub.restore();