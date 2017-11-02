//------------------------------------------------------------------
// PART I
//------------------------------------------------------------------
//Create a function that appends an "li" element to an unordered list
// ("ul" element) in the DOM. This function should take a string as a
// parameter. In the body of the function, there should be code that
// appends an "li" element, with the string inside, to the un-ordered
// list ("ul" tag):
const addListElementToOutput = (string)=>{
  const getUnordered = document.getElementById('output')
  const liElement= document.createElement('li')
  const liText = document.createTextNode(string)
  liElement.appendChild(liText)
  getUnordered.appendChild(liElement)
}

// addListElementToOutput('this took a danglongtime')
// addListElementToOutput('i tie red. uhm tired')
// addListElementToOutput('keep it going')
// addListElementToOutput('giving up is real failure')
// addListElementToOutput('....and better late than never!!')

//------------------------------------------------------------------
// PART II
//------------------------------------------------------------------
// Using the strategy of your choice, write a loop over the numbers
// 1 - 100 that satisfies the following conditions:
//
// 1. If the number is divisible by 3, append "Fizz" to the unordered list
// 2. If the number is divisible by 5, append "Buzz" to the unordered list
// 3. If the number is divisible by 3 AND 5, append "FizzBuzz" to the unordered list.
// 4. Bonus points: Include both the number *and* the word you've appended to the list

for (var i=1; i<=100; i++){
  if ((i%3===0) && (i%5===0)) {
    addListElementToOutput('FizzBuzz')
  }
  else if(i%3===0){
    addListElementToOutput('Fizz')
  }
  else if (i%5===0) {
    addListElementToOutput('Buzz')
  }
}
