/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n<0){return null}
	if(n===0){
		return 1;
	} else {
		return n*factorial(n-1)
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	// if array.length is 0, return 0
	// else return array[i] + sum(array with first num taken out)
	for(let i=0; i<array.length; i++){
		if (array.length === 0){
			return 0
		} else {
			return array[i] + sum(array.shift()) 
		}
	}
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	//flatten array
	//base case: if array length is 1, return array[0]  
	//work: if array length is greater than 1, add array[0] to array.slice(0,1)  
	
	//var counter = 0;
	//loop through array
		//if it's a number add it to counter 
		//if it's an array, recurse again 

	var counter = 0;
	for(var i=0; i < array.length; i++){
		if(Array.isArray(array[i]) === false){
			counter += array[i];
		}
		counter += arraySum(array[i])		
	};
	return counter;
};

// 4. Check if a number is even.
var isEven = function(n) { // n = 7-2 ---> 5-2 ----> 3-2 = 1 <---false!
	//booleans to test
	//base case: if n is 0, return true. If n is 1 return false. If n is less than 0, count down and return isEven
	if (n === 0){
		return true
	}; 
	if (n === 1){
		return false
	};
	if (n < 0){
		return isEven(n+2) //why do we need 'return' if isEven is invoking already
	};
	return isEven(n-2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45 //1+2+3+4+5+6+7+8+9+10
// sumBelow(7); // 21
var sumBelow = function(n) {
	//VER1
	// if(n-1 >= 0){ 
	// 	return n-1 + sumBelow(n-1);
	// 	//5 --> 5-1 + sumBelow(5-1) ---> 4 + sumBelow(4)    4+3+2+1 = 10
	// 	//4 --> 4-1 + sumBelow(4-1) ---> 3 + sumBelow(3)
	// }
	// if(n === 0){
	// 	return 0;
	// }

	// VER2
	//base case: 
		// if n is 0, return 0
	//recursive case:
		//is n a positive number? if so n-1 : if not n+1
		//recurse: n + sumbBelow(n)

		if(n === 0){return 0};
		n > 0 ? n = n-1 : n = n+1;
		return n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) { // 3
  let arr = []; // 
  if(x === y){
    return [];
  }
  if(x < y){
    if(x === y - 1){  // false
      return arr;
    }
    arr = [x + 1].concat(range(x + 1, y)); 
    return arr;
  };
  if(x > y){
    if(x === y + 1){
    return arr;
    }
    arr = [x - 1].concat(range(x - 1, y))  
    return arr;
  };
};


// (2,5)
// var newArr=range(2, 5-1);
// newArr.push(5-1);
// return newArr //[4]

// var newArr=range(2, 4-1);
// newArr.push(4-1);
// return newArr //[4,3]




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	//base:
		//if exp === 0, return 1
	// recursive case:
		//if base is not 0, return base * base; exp = exp-1
	// if(exp < 0){exp = exp * -1};
	if(exp === 0){return 1};
	if(exp > 0) {
	exp--;
	return base * exponent(base, exp)
	};

	// return (1/base) / exponent(base, exp) //HOW TO TEST FOR NEGATIVE EXP??
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	// 2^0 = 1
	// 2^1 = 2
	// 2^2 = 2*2 = 4
	// 2^3 = 2*2*2 = 8
	// 2^4 = 2*2*2*2 = 16
	// 2^5 = 2*2*2*2*2 = 32
	//base case: if n is an integer return false;
			  // or if n is 1 return true
	//recurse case: divide n by 2
if(n === 1){
	return true
};
if(!Number.isInteger(n) || n === 0){
	return false};
	return powerOfTwo(n/2);
}
// v2 (Eli's version)
//  if (n === 1 || n === 2) {
//     return true;
//   }
//   if (n/2 === 2) {
//     return true;
//   } else if (n/2 < 2) {
//     return false;
//   } else {
//     return powerOfTwo(n/2);
//   }
// }

// 9. Write a function that reverses a string.
var reverse = function(string) {
	let arr = [];
//base case: when string is '' return ''
//recursive case: take string.length-1 and push to array, then recurse substr(0, string.length-1)
	if(string.length === 1){
		arr.push(string);
		return arr.join('');
	}; 
	arr.push(string[string.length-1]);
	arr = arr + reverse(string.substr(0, string.length-1));
	return arr;

// 	//base case:
// 		//when string.length is 1, return string[0]
// 	//recursive case:
// 		//if string length is not 1, slice string and push string[string.length-1] into arr
// 	//join the array and return it

// 	// var reverseStr = '';
// 	// var splitStr = string.split('') //'ello'
// 	// if(string.length ==== ''){return };
// 	// reverse(arr.push(splitStr.pop())) //
// 	if(string === ''){return ''};
// 	return reverse(string.substr(1)) + string.charAt(0);
// 	// subString 'ello'
// 	// charAt 'h'
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) { 

    var modifiedStr = string.toLowerCase().replace(/\s+/g, '');

    if(modifiedStr.length === 0 || modifiedStr.length === 1){
        return true;
    };
    if(modifiedStr[0]  === modifiedStr[modifiedStr.length-1]){
        return palindrome(modifiedStr.slice(1, modifiedStr.length-1));
    };
    return false;
    };


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	//base case: if x - y is less than 0, return 
				//if y + y IS greater than x, return x-y	

// 17-5 = 12
// 12-5 = 7
// 7-5 = 2
// 2-5 return 2

// 	if(x === 0 || y === 0){return NaN};
// 	if(x < y){
// 		return x;
// 	} else {
// 		return modulo(x-y, y);
// 	};
// };


// var modulo = function(x, y) {
 if (y === 0) { return NaN }
    if (y < 0) { y = -y }
    if (x < 0) { return -modulo(-x, y) }
    else if (x < y) { return x }
    else { return modulo(x - y, y) }

};

// 17, 5 ---> (17, -5)


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

	//base: when y = 0, stop added x to itself
	//recursive: add x + (multiply(x, y-1))
	// 3*5
	// 3+3+3+3+3
	// 6+3 = 9
	// 9+3 = 12
	// 12+3 = 15
	if(x === 0 || y === 0){return 0};

	if (x < 0 && y < 0){ //account for negative x and y
		x = -x;
		y = -y
		return x + (multiply(x, y-1))
	};
	
	if (x > 0 && y > 0){ //account for positive x and y
		return x + (multiply(x, y-1))
	};

	if( y < 0 && x > 0){ //if y is negative but x is positive
		return -x + (multiply(x, y+1));  
	};
	if(x < 0 && y > 0){  //if x is negative but y is positive
		return x + (multiply(x, y-1)); 
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) { 
	// how many times does y fit into x
	// adding y to itself and seeing if it equals x

	// 12/16 = 3/4 = .75
	// 2/5 = .4     1/5=.20

	//if y is 0, return NaN
	//if y is 1, return x
	//if x is 0, return 0
	//if y is greater than x, return y-x to get remainder
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	//base case: if y === 0, return x; 
    if (x < 0 || y < 0) { return null }
    if(y/x === 0) { return x }
    return gcd(y, x%y);
};


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	//base case:
		// str1.length === 0, return true, else false
	//recursive case:
	 // compare str1[0] and str2[0]
	 	//if they match, recurse with substr
	 	//if they don't match, return false

	 if(str1.length === 0 && str2.length === 0){
	 	return true;
	 };

	 if(str1[0] === str2[0]){
	 	return compareStr(str1.substr(1), str2.substr(1));
	 } else {
	 	return false;
	 }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) { // 'hello' ['h', 'e', 'l', 'l', 'o']
  var array = [];
  if (str.length === 0) {
    return array;
  }
  array.push(str[0])
  return array.concat(createArray(str.slice(1))) 
};

// 17. Reverse the order of an array
var reverseArr = function(array) { //[1,2,3] ---> [3.2.1]
	
	//base case: if array length is 0, return [];
	//recursive case: pop off last value and concat 
	let arr = []; //[] //[[3] + reverseArr([2,1]) //[[3,2] + reverseArr([1])// [[3,2,1] + reverseArr([])
	if(array.length === 0){return []}; //false //false //false //true
	arr.push(array.pop()); //[3] //[3] + [2] + (reverseArr([1])) 	//[[3,2] + reverseArr([1]) 
	arr = arr.concat(reverseArr(array)); //[3].concat(reverseArr([2,1]))   //[3, 2, 1]
	return arr;

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	//base case: 
		// when length === 0, return []
	//recursive case:
		// push value into arr
		//arr = arr.concat(buildList(value, decrement length by 1))

	var arr = []; //[]  //[] //[]  //[]
	if(length === 0){return []}; //skip //skips //skip  //returns []
	arr.push(value); //[].push(7) //[].push(7) //[].push(7)
	arr = arr.concat(buildList(value, length-1));  //[7].concat(buildList(7, 3-1))  //[7].concat(buildList(7, 2-1))  //[7].concat(buildList(7, 0))
	//[7,7,7])
	return arr;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {	//n=3	//n=2	//n=1

	// var outputArr = []
	//if n%3 ===0  && n%5 === 0
		//n==='FizzBuzz'
	//%3...
	//%5...
	//outputArr = outputArr.unshift(fizzBuzz(n-1))

	if(n === 1){return '1'}
	var x = n + '';	//3	//2	//1
	var outputArr = [];	//[]	//[]	//[]
	if(n % 3 === 0){	//yes	//no	//no
		x = 'Fizz';		//"Fizz"
	};
	if(n % 5 === 0){	//no	//no
		x = 'Buzz';
	};
	if (n % 3 === 0 && n % 5 === 0){	//no	//no	//no	
		x = 'FizzBuzz';
	};
	outputArr.push(x);	//outputArr.push(3) --> [3]		//outputArr.push(2) --> [2]		//outputArr.push(1) ---> [1]
	outputArr.unshift(fizzBuzz(n-1));	
	//[3].unshift([2].unshift(1) ----> [[1,[2],['Fizz]]
	return outputArr.reduce(function(acc, curr){
		return acc.concat(curr);
	},[])
};

// console.log(fizzBuzz(15))

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {	//2 //4 //4 //[]
    //base case: 
        // if array.length === 0, return 0
	//recursive case: 
		//if (array[0] === value) + countOccurence(array.slice),value);
	if(array.length === 0){ //no	//no	//no	//yes
		return 0;
	}
	return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
	//0 + 1 + 1 + 0)
}

// console.log(countOccurrence(1,2,2),2)

// countOccurrence([2,4,4], 4)

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {	//1		//2		//3		//[]
	let arr = [];
	//base: 
		// if array.length === 0, return [];
	//recursive:
		// rMap(array[0]).concat(rMap(array.slice(1)))
	if(array.length === 0){	//no	//no	//no	//yes
		return [];	
	};
	// arr.push(callback(array[0]));
	arr = [callback(array[0])].concat(rMap(array.slice(1), callback)) //[2,4,6]
	return arr;
	// [2,4,6]])))		
};
//
const timesTwo = function(n){
  return n*2
}
// console.log(rMap([1,2,3], timesTwo))

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{
// 	'x':'y'},'t':{
// 		'r':{
// 			'e':'r'},'p':{
// 			'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {  
	let count = 0; // 0 // 0
	  for(var el in obj){ // 'e': {'x': 'y'} // {'x': 'y'}
		if(key === el){ // 'e' === 'e' // false 
		count++ // 1
		}
		if(typeof obj[el] === 'object'){ // true // false
		count += countKeysInObj(obj[el], key); // countKeysInobj({'x': 'y'}) 
		}
	  }
	return count
	};

// 23. Write a function that counts the number of times a value occurs in an object.
var obj = {'e':{
	'x':'y'},'t':{
		'r':{
			'e':'r'},'p':{
			'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	let count = 0; 
	for(var el in obj){ 
	  if(obj[el] === value){
		  count++;
	  }
	  if(typeof obj[el] === 'object'){ 
		// console.log(obj[el])
	  count += countValuesInObj(obj[el], value); 
	  }
	}
  return count
};

// console.log(countValuesInObj(obj, 'r'))

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
	// replaceKeysInObj(input, 'r', 'a');
	var obj = {'e':{
		'x':'y'},'t':{
			'r':{
				'e':'r'},'p':{
				'y':'r'}},'y':'e'};

var replaceKeysInObj = function(obj, oldKey, newKey) {
	
	//loop through object
	//if obj's key doesn't equal old key,
		//set key in updatedObj
		//recurse  with updatedObj
	//if obj's key equals old key
		//set newKey in updatedObj
		//recurse with updatedObj
	
	// let newObj = obj;
	// newObj.test = 'TEST';
	// console.log(obj)
	// console.log(newObj)


};

replaceKeysInObj()

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {

};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	//base case: if array length is 1, return array[0]
	//recursive case: concat upper cased array[0]
	if(array.length === 0){
		return [];
	}
	return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)))
};
// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))


// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if(array.length === 0){
		return [];
	}
	return [array[0][0].toUpperCase()].concat(capitalizeFirst(array.slice(1)))
};
console.log(capitalizeFirst(['car','poop','banana']))

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
////FROM VIRTUAL OFFICE HOURS
var compress = function(list){

if(list.length === 0){
    return [];
  }

  // if(list.length === 1){
  //   return list[0];
  // }

  if(list[0] !== list[1]){
    return [list[0]].concat(compress(list.slice(1)));
  }
  return compress(list.slice(1))
}

compress([1,2,2,3])
// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
