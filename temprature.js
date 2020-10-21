/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Convert Celsius Into Fahrenheit
// Function Date   :  21 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  35°C is 95 °F.
//                 :  50°F is 10°C.
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function Ctemp(celsius) {
    var cel = celsius;
    var CTemp = cel * 9 / 5 + 32;
    var message = cel + '\xB0C is ' + CTemp + ' \xB0F.';
    console.log(message);
}

function Ftemp(fahrenheit) {
    var fah = fahrenheit;
    var FTemp = (fah - 32) * 5 / 9;
    var message = fah + '\xB0F is ' + FTemp + '\xB0C.';
    console.log(message);
}
Ctemp(35);
Ftemp(50);

