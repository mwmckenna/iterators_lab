var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67,34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });


  describe ('#min', function () {
    var myArr;

    beforeEach(function (){
       myArr = [66,22,67,34];
     });

    it ('it should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });

    
  });
  
  describe ('#each', function () {
      var myArr;
      beforeEach(function (){
         myArr = ['Lisa','Emilie','Lindsey','Elly'];
      });
      var newNames = [];
      it ('it should return the same values into a new array', function () {
      Iterators.each(myArr, function(name) {
        console.log('Hi ' + name);
        newNames.push(name);
      });
        expect(myArr).to.eql(newNames);
      });  
  });

  describe('#map', function () {
    var myArr;

    beforeEach(function () {
      myArr = [33,24,12,54];
    });
    var callback = function (num) {
      return (num+1);
    };
    it('should add 1 to each number in the array', function () {
      expect(Iterators.map(myArr, callback)).to.eql([34,25,13,55]);
    });
 
  describe ("filter", function () {
    var myArr;
    beforeEach(function (){
    myArr = [4,6,11,15];
    });
      it("should bring back the values that are true to the function", function () {
        var newArr = Iterators.filter(myArr, function(num) {
          return num < 10;
        });
        expect(newArr).to.eql([4,6]);
      });
    });

  describe ("reduce", function () {
    var myArr;
    beforeEach(function (){
    myArr = [4,6,11,15];
    });
      it("should add the values of an array together and reduce the number of elements", function () {
        var newArr = Iterators.reduce(myArr);
        expect(newArr).to.eql(36);
      });
    });
    
  describe ("reject", function () {
    var myArr;
    beforeEach(function (){
    myArr = [4,6,11,15];
    });
      it("should bring back the values that are false to the function", function () {
        var newArr = Iterators.reject(myArr, function(num) {
          return num < 10;
        });
        expect(newArr).to.eql([11,15]);
      });
    });

  });


});
