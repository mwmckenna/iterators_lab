# Iterators Lab
## Functional Programming


### Description

In the iterators lab we will be continuing our exploration of iterators and building a few more useful methods. These methods will belong to an Iterators namespace, which we discussed in class. We also will try to use various testing methods to verify that our code is working.


### Phase-1

Research the following term and summarize your findings on it two to three sentences:

* `higher-order function`

Pretending we implemented the following methods, update this README with a description of each of the following and an example you've created:

* `max`
	returns the number with the highest value: max(7, 15) returns 15

* `min`
	returns the number with the lowest value: min(4, 7, 19) returns 4

* `each`
	each selects each value in an array and can apply another function to each one: 
	var names = ["Lisa", "Emilie", "Lindsey"];
	each(names, function (person){
	console.log ("Hi" + person);
	}  outputs Hi Lisa
				Hi Emilie
				Hi Lindsey

* `map`
accesses the values in an array and calls a function to alter them, i.e. replace them with new values/a new array
  map:function (numList, callback) {
  var map = [];
  for (var i = 0; i < numList.length; i++) {
    map.push(callback(numList[i]));
  }
  return(map);
  },

* `filter`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
creates a new array with all elements that have passed through the function it is applying
 filter:function (numList, callback) {
    var newArr = [];
    for (var i = 0; i < numList.length; i++) {
      if (callback(numList[i]) === true) {
        newArr.push(numList[i]);
      }
    }
      return newArr;
    }, 

* `reduce`: [note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
	adds elements in an array together from left to right. Reduces the number of elements to one but adds them up to a sum of their values.
	reduce:function (numList) {
    var number = 0;

    for (var i = 0; i < numList.length; i++) {
      number = numList[i]+number;
      }
      return number;
    },

* `reject`: [note](http://underscorejs.org/#reject)
returns the "rejects" of a truth function. If the function asks for numbers divisible by 2, reject will return the odd numbers into an array.
	 reject:function (numList, callback) {
	    var newArr = [];
	    for (var i = 0; i < numList.length; i++) {
	      if (callback(numList[i]) !== true) {
	        newArr.push(numList[i]);
	      }
	    }
	      return newArr;
	    }, 


Use the notes provided to help guide you explanation.


### Phase-2

* Write a test in the `spec` folder for `min` and implement it in the `src/iterators.js` folder. There is a test for a `max` method already if you'd like to use that as inspiration.

* Re-implement the `each` function, but write the spec for it first. Continue this exercise with `map` and `filter` and write tests first!


### Phase-3

Implement the remaining iterator methods in the namespace and add tests for each one of them. Make sure that they return the correct data as well as datatype, and implement tests for edge cases (empty arrays, negative numbers).

