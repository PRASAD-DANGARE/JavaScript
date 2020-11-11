/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Create New String From An Existing String
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  DBCA HFGE LJKI
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function string(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(string('ABCD'));
console.log(string('EFGH'));
console.log(string('IJKL'));
