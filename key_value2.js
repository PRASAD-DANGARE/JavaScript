/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Get Copy Of Object Where Keys Become Value & Value Is Key
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  { '1': 'One', '2': 'two', '3': 'three' }
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function invert_key_value(obj) 
{
    var result = {};
    var keys = _keys(obj);
    
    for (var i = 0, length = keys.length; i < length; i++) 
    {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}
function _keys(obj) 
{
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
}

console.log(invert_key_value({One: "1", two: "2", three: "3"}));