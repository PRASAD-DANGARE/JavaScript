/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Display Current Date And Time
// Function Date   :  20 Oct 2020
// Function Author :  Prasad Dangare
// Output          :   Today's Day : Tuesday
//                 :   Current Time: 6 PM
//                 :   Current Minute:  : 3
//                 :   Current Second:  : 43
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

var date = new Date();

var day = date.getDay();

var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

console.log("Today's Day : " + weeks[day]);

var hour = date.getHours();

var minute = date.getMinutes();

var second = date.getSeconds();

var prepand = (hour >= 12) ? " PM " : " AM ";

hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }

    else {
        hour = 12;
        prepand = ' PM';
    }
}
console.log("Current Time : " + hour + prepand);
console.log("Current Minute : " + " : " + minute);
console.log("Current Second : " + " : " + second);