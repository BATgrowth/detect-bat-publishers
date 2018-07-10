let chai = require('chai');
let should = chai.should();
const check = require('../src/lib');
const assert = require('chai').assert;

describe('isWebsiteVerifiedByDnsRecord', () => {
  it('isWebsiteVerifiedByDnsRecord', function () {
    return check.isWebsiteVerifiedByDnsRecord('batgrowth.com')
      .then(
        function (res) {
          assert.isFalse(res);
        }
      )
  })
});

describe('isWebsiteVerifiedByTxtVerificationFile', () => {
  it('isWebsiteVerifiedByTxtVerificationFile', function () {
    return check.isWebsiteVerifiedByTxtVerificationFile('batgrowth.com')
      .then(
        function (res) {
          assert.isTrue(res);
        }
      )
  })
});

describe('isWebsiteVerifiedByBraveApiCall', () => {
  it('isWebsiteVerifiedByBraveApiCall', function () {
    return check.isWebsiteVerifiedByBraveApiCall('batgrowth.com')
      .then(
        function (res) {
          assert.isTrue(res);
        }
      )
  })
});