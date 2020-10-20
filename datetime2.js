/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Display Current Date Month And Year
// Function Date   :  20 Oct 2020
// Function Author :  Prasad Dangare
// Output          :   20-10-2020
//                 :   20/10/2020
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


var date = new Date();

var dd = date.getDate();

var mm = date.getMonth() + 1;

var yyyy = date.getFullYear();

if (mm < 10) {
    mm = '0' + mm;
}

date = dd + '-' + mm + '-' + yyyy;
console.log(date);

date = dd + '/' + mm + '/' + yyyy;
console.log(date);

