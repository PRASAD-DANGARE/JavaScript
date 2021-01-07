/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find The Leap Year Using Array
// Function Date   :  07 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 2004, 2008, 2012, 2016, 2020 ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function leap_year(starting_year, ending_year) 
{
    var range = [];
    for (var i = starting_year; i <= ending_year; i++)
    {
        range.push(i);
    }
    var arr = [];

    range.forEach
    (
        function(year)
    { 
        if (LeapYear(year)) 
        arr.push(year);
    });

    return arr;
}
function LeapYear(year) 
{
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) 
    {
        return year;
    } 

    else 
    {
        return false;
    }
}

console.log(leap_year(2002, 2020));