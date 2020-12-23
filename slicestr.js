/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Slice The String
// Function Date   :  23 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 'Prasad' ]
//                 :  [ 'Pr', 'as', 'ad' ]
//                 :  [ 'Pra', 'sad' ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


slice_string =  function(str, size)
{
    if (str == null) return [];
    str = String(str);
    size = ~~size;

    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

console.log(slice_string('Prasad'));
console.log(slice_string('Prasad',2));
console.log(slice_string('Prasad',3));