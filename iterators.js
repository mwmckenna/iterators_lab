var iterators = {
  max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

  min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

  each: function (numList, callback) {
    var each = [];
    var x = 0;
    for (var i = 0; i < numList.length; i++) {
      callback(numList[i]);
    } 
  },

  map:function (numList, callback) {
  var map = [];
  for (var i = 0; i < numList.length; i++) {
    map.push(callback(numList[i]));
  }
  return(map);
  },

  filter:function (numList, callback) {
    var newArr = [];
    for (var i = 0; i < numList.length; i++) {
      if (callback(numList[i]) === true) {
        newArr.push(numList[i]);
      }
    }
      return newArr;
    }, 

  reduce:function (numList) {
    var number = 0;

    for (var i = 0; i < numList.length; i++) {
      number = numList[i]+number;
      }
      return number;
    },


  reject:function (numList, callback) {
    var newArr = [];
    for (var i = 0; i < numList.length; i++) {
      if (callback(numList[i]) !== true) {
        newArr.push(numList[i]);
      }
    }
      return newArr;
    }, 

};

module.exports = iterators;
