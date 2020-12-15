/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Longest Word From There Length Size
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  VijayKumar 
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function longest_word(str)
{
  var arr = str.match(/\w[a-z]{0,}/gi);
  var result = arr[0];

  for(var x = 1 ; x < arr.length ; x++)
  {
    if(result.length < arr[x].length)
    {
    result = arr[x];
    } 
  }
  return result;
}
console.log(longest_word('Prasad VijayKumar Dangare'));