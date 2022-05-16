//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
//Examples:
//Input: 42145 Output: 54421
//
//Input: 145263 Output: 654321
//
//Input: 123456789 Output: 987654321

//Parameters:non negative integer, whole number
//Return: array 
//Examples: Input: 42145 Output: 54421
//Pseudo Code: array of numbers 
//split n
//sort
//join
//return a new array

function descendingOrder(n){
  
    n = [...n.toString()];
    
    return Number(
              n
              .sort()
              .reverse()
              .join('')
            );
  }
  descendingOrder(42145)

  