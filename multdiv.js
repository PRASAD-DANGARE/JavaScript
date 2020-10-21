/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Function Name   :  JavaScript Program To Calculate Multiply And Divide From User
// Function Date   :  21 Oct 2020
// Function Author :  Prasad Dangare
// Output          :  10 * 2 The Result Is 20
//
/////////////////////////////////////////////////////////////////////////////////////////////////////

function multiplyBy() {
    No1 = document.getElementById("First Number").value;
    No2 = document.getElementById("Second Number").value;
    document.getElementById("result").innerHTML = No1 * No2;
}

function divideBy() {
    No1 = document.getElementById("First Number").value;
    No2 = document.getElementById("Second Number").value;
    document.getElementById("result").innerHTML = No1 / No2;
}

function subtractBy() {
    No1 = document.getElementById("First Number").value;
    No2 = document.getElementById("Second Number").value;
    document.getElementById("result").innerHTML = No1 - No2;
}
