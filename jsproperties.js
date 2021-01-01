/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To List The Properties Of JavaScript Object
// Function Date   :  01 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'Prasad', 'Vijaykumar', 'Dangare' ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



function properties_of_js_object(obj) 
{
    if (!js_Object(obj)) return [];

    if (Object.keys) return Object.keys(obj);
    
    var keys = [];
    
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    
    return keys;
}
function js_Object(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

console.log(properties_of_js_object({Prasad: "#FF0000", Vijaykumar: "#00FF00", Dangare: "#FFFFFF"}));