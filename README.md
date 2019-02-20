# detect-bat-publishers

**DEPRECATED: I am now only relying on Brave official API to gather Brave publishers for batgrowth.com**

A npm package used to detect Brave Browser / Basic Attention Token publishers using 3 different methods:
- Brave API call (the most reliable way)
- DNS lookup
- Fetching brave-payments-verification.txt

The package is used to build the list of Brave Bowser publishers on https://batgrowth.com/publishers

It was inspired by the following gist: https://gist.github.com/da2x/6e2ef4a30f476f8aec4aca7bbadbc772

You can Download, unzip and parse to JSON the Alexa Top 1 Million websites .csv in order to have a decent data sample to try this package on:
http://s3.amazonaws.com/alexa-static/top-1m.csv.zip

## Installation

This module is installed via npm:

```
npm i detect-bat-publishers
```

## Usage
```javascript

let check = require('detect-bat-publishers');

// Return a promise with true/false
// Use a DNS lookup
check.isWebsiteVerifiedByDnsRecord('batgrowth.com')

// Return a promise with true/false
// Fetch brave-payments-verification.txt
check.isWebsiteVerifiedByTxtVerificationFile('batgrowth.com')

// Return a promise with true/false
// Use Brave official API (recommended)
check.isWebsiteVerifiedByBraveApiCall('batgrowth.com')
```
