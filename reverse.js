/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Reverse A String
// Function Date   :  11 Nov 2020
// Function Author :  Prasad Dangare
// Output          :  DCBA HGFE LKJI
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function Reverse(str) {
    return str.split("").reverse().join("");
}

console.log(Reverse("ABCD"));
console.log(Reverse("EFGH"));
console.log(Reverse("IJKL"));
