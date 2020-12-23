/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Count Occurrence Of Substring In String
// Function Date   :  23 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  1
//                 :  0
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function count_occurrence(main_str, sub_str) 
{
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
}
 
console.log(count_occurrence("Prasad Dangare", 'Prasad'));
console.log(count_occurrence("Prasad Dangare", 'Vijaykumar',false));