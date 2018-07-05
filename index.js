var top_websites = require('./top-1m.json');
var Promise = require("bluebird");
var _ = require('underscore');
const dns = require('dns');

i = 2;
j = 1002;
var range = _.range(i, j);

let scrap_top_1m_websites = (range) => {
  return Promise.all(range.map((key) => {
    const current_website = top_websites["" + key + ""]['google.com'];
    return get_dns_record(current_website);
  })).then((res) => {
    console.log('Finished range', range[0]);
    return res;
  });
}

var get_dns_record = (website) => {
  //console.log('DNS for: ', website)
  return new Promise((resolve, reject) => {
    return dns.resolve(website, 'TXT', function (err, records) {
      if (!err) {
        records.forEach(element => {
          if (element[0].indexOf('brave-ledger-verification=') !== -1) {
            console.log('DETECTED: ', website);
          }
        });
      }
      resolve();
    });
  })
}

var main = () => {
  console.log('TESTING RANGE:', range[0]);
  return scrap_top_1m_websites(range).then(() => {
    if (j > 1000000) {
      console.log('JOB DONE');
      return;
    }
    i = i + 1000;
    j = j + 1000;
    range = _.range(i, j);
    main();
  })
}

main();




