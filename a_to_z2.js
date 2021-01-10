/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Fill An Array With Values 
// Function Date   :  10 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//                      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
//                      'y', 'z' ]
//
//                 :  [ 'Z', 'X', 'V', 'T', 'R', 'P', 'N', 'L',
//                      'J', 'H', 'F', 'D', 'B' ]
//
//                 :  [ 0, 1, 2, 3, 4, 5 ]
//                 :  [ 0, 10, 20, 30, 40, 50 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function a_to_z_range(starting, ending, steps) 
{
    var arr_range = [];
    if ((steps === 0) || (typeof starting == "undefined" || 
    typeof ending ==    "undefined") || (typeof starting != typeof ending))
    return false;
  
    if (ending < starting) 
    {
        steps = -steps;
    }

    if (typeof starting == "number") 
    {
        while (steps > 0 ? ending >= starting : ending <= starting) 
        {
            arr_range.push(starting);
            starting += steps;
        }
    } 
    
    else if (typeof starting == "string") 
    {

        if (starting.length != 1 || ending.length != 1) 
        {
            throw TypeError("Strings With One Character Are Supported!!");
        }
        starting = starting.charCodeAt(0);
        ending = ending.charCodeAt(0);

        while (steps > 0 ? ending >= starting : ending <= starting) 
        {
            arr_range.push(String.fromCharCode(starting));
            starting += steps;
        }

    }
   
    else
    {
        throw TypeError("Only String And Number Are Supported!!");
    }

    return arr_range;

}

console.log(a_to_z_range('a', "z", 1));
console.log(a_to_z_range("Z", "A", 2));
console.log(a_to_z_range(0, 5, 1));
console.log(a_to_z_range(0, 50, 10));