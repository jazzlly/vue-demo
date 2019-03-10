const except = require('chai').expect

var _ = require('lodash');

var obj1 = {
    name: "Ryan",
    age: 41,
    creation: "13-02-2019",
    deletion: "13-01-2018"
  };
  
  var obj2 = {
    name: "Ryan",
    age: 41,
    creation: "13-02-2016",
    deletion: "13-04-2016"
  };

  var obj3 = {
    name: "ryan",
    age: 41,
    creation: "13-02-2016",
    deletion: "13-04-2016"
  };
  
  var obj4 = {
    name: "Ryan",
    age: 42,
    creation: "13-02-2016",
    deletion: "13-04-2016"
  };

  var result = _.isEqual(
    _.omit(obj1, ['creation', 'deletion']),
    _.omit(obj2, ['creation', 'deletion'])
  );
  
  console.log(result);
  except(result).to.be.true

  except(_.isEqual(
      _.omit(obj1,  ['creation', 'deletion']),
      _.omit(obj3,  ['creation', 'deletion'])
  )).to.be.false

  except(_.isEqual(
    _.omit(obj1,  ['creation', 'deletion']),
    _.omit(obj4,  ['creation', 'deletion'])
)).to.be.false
