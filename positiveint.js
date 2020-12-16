/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Factors Of Positive Integer
// Function Date   :  16 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 1, 2 ]
//                 :  [ 1, 2, 3, 4, 6, 12 ]
//                 :  [ 1, 3, 31, 93 ]
//                 :  [ 1, 2, 4, 5, 10, 20, 25, 50, 100 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function factorial(number)
{
    var no_factorial = [], a;
 
    for (a = 1; a <= Math.floor(Math.sqrt(number)); a += 1)
    if (number % a === 0)
    {
        no_factorial.push(a);
        if (number / a !== a)
        no_factorial.push(number / a);
    }
    no_factorial.sort(function(i, j)
   {
        return i - j;
   });  // numeric sort
        return no_factorial;
}

console.log(factorial(2));  
console.log(factorial(12));  
console.log(factorial(93)); 
console.log(factorial(100)); 
