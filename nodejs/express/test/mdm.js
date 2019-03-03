var util = require('util')
var mdmAdmin = require('./admin').mdmAxiosLogin

describe("# mdm admin test", function () {
  describe("## get top org", function () {
    it('should login ok, get token ok', async function () {
      console.log('get top org test');
      console.log(util.inspect(mdmAdmin));
      console.log(util.inspect(mdmAdmin()));

      // const topOrgResp = await mdmAxiosLogin({
      //   url: '/orgs/top',
      // })

      // console.log(topOrgResp.data);
      // // assert.equal(topOrgResp.status, 200)
    })
  })
})