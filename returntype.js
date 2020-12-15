/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Return Data Type 
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  string number boolean
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function return_data_type(type)
{
    var dtype = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
    if (typeof type === "object" || typeof type === "function") 
    {
        for (x = 0, len = dtype.length; x < len; x++) 
        {
            if (type instanceof dtype[x])
                {
                    return dtype[x];
                }
        }
    }
    
    return typeof type;
}

console.log(return_data_type("Prasad"));
console.log(return_data_type(93));
console.log(return_data_type(true));