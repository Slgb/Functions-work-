// 1. Write a function called 'multiply' that multiplies two numbers and returns the result

function multiply (number1,number2) {

	
	return number1 * number2;
}



// 2. Write a function called 'addThree' that adds three numbers together and returns the result

function addThree (number1,number2,number3) {

	return number1 + number2 + number3;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers

function smallestNumber (number1,number2) {

	return Math.min(number1,number2);
}


// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers

function maxOfThree (number1,number2,number3) {

	return Math.max(number1,number2,number3);
}



// 5. Write a function called 'reverseString' that returns the reverse a string 

function reverseString (String1) {

	var spltString = String1.split("");
	var reverseString = spltString.reverse("");
	var joinString = reverseString.join("");
	return joinString;
}


// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter

function disemvowel (string) {

	return string.replace(/[aeiou]/gi, '');


	// while (var )

	// for (var vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u");

}





// 7. Write a function called 'removeOdd' that removes all ODD number from an array

function removeOdd (list) {



	for (var i = 0; i < list.length; i++) {
		
	
		while (list[i]%2) {
			list.splice(i, 1);


		}
	}
		

	return list;


}



// 8. Write a function called 'removeEven' that removes all EVEN number from an array

function removeEven () {

	var removeEven = [12,3,9,7,10];



	for (var n = 0; n < removeEven.length; n++) {

		var newArray2 = [];
		var result2 = removeEven
	}
}








// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length





// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array, 
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules 

// But for multiples of three print "Fizz" instead of the number 
// For the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

