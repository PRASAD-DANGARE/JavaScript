/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Convert Object Into List Of Pairs
// Function Date   :  03 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ [ 'one', '1' ], [ 'two', '2' ], [ 'three', '3' ] ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function key_value_pairs(obj) 
{
    var keys = _keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    
    for (var i = 0; i < length; i++) 
    {
        pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
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

console.log(key_value_pairs({one: "1", two: "2", three: "3"}));