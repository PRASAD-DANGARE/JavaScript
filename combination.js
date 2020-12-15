/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Make Combination From String 
// Function Date   :  15 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  A B AB C AC BC ABC D AD BD ABD CD ACD BCD ABCD
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function stringcombi(str)
{
    var arr = [];
    for (var x = 0, y = 1; x < str.length; x++, y++) 
    {
        arr[x] = str.substring(x, y);
    }
    var combi = [];
    var num = "";
    var slent = Math.pow(2, arr.length);

    for (var i = 0; i < slent ; i++)
    {
        num = "";
        for (var j = 0; j < arr.length; j++) 
        {
            if ((i & Math.pow(2,j)))
            { 
                num += arr[j];
            }
        }
        if (num !== "")
        {
            combi.push(num);
        }
    }
    console.log(combi.join("\n"));

}
stringcombi("ABCD");