/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Array Elements Using Binary Search
// Function Date   :  17 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  6
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function binary_Search_array(noarr, arrelement) 
{
    var midpos = Math.floor(noarr.length / 2);
    if (noarr[midpos] === arrelement)
    {
       return midpos;
    }
    else if (noarr.length === 1) 
    {
       return null;
    }
    else if (noarr[midpos] < arrelement) 
    {
       var arr = noarr.slice(midpos + 1);
       var res = binary_Search_array(arr, arrelement);
       if (res === null)
       {
          return null;
       }
       else 
       {
          return midpos + 1 + res;
       }
    }
    else 
    {
       var arr1 = noarr.slice(0, midpos);
       return binary_Search_array(arr1, arrelement);
    }
}
 
var arrayelement = [1, 2, 3, 5, 6, 8, 10];
console.log(binary_Search_array(arrayelement, 10));