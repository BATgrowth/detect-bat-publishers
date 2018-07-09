const check = require('./src/lib');

return check.is_website_verified_by_brave_api_call('batgrowth.com').then((res) => {
  console.log(res);
});