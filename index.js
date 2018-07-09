var Promise = require("bluebird");
var _ = require('underscore');
const dns = require('dns');
var rp = require('request-promise');

let is_website_verified_by_dns_record = (website_url) => {
  return new Promise((resolve, reject) => {
    return dns.resolve(website, 'TXT', function (err, records) {
      if (err) {
        return reject(err);
      }
      records.forEach(element => {
        if (element[0].indexOf('brave-ledger-verification=') !== -1) {
          return resolve(true);
        } else {
          return resolve(false);
        }
      });
    });
  })
}

let is_website_verified_by_txt_verification_file = (website_url) => {
  return rp(website_url + '/.well-known/brave-payments-verification.txt')
    .then(function (res) {
      res = JSON.parse(res);
      if (res.statusCode === '200') {
        return true;
      } else {
        return false;
      }
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

let is_website_verified_by_brave_api_call = (website_url) => {
  return rp('https://mercury-proxy.privateinternetaccess.com/v3/publisher/identity?publisher=' + website_url)
    .then(function (res) {
      res = JSON.parse(res);
      if (res.properties.verified) {
        return true;
      }
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

module.exports = {
  is_website_verified_by_dns_record,
  is_website_verified_by_txt_verification_file,
  is_website_verified_by_brave_api_call,
};