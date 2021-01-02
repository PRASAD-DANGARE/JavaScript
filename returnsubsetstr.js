/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Return Subset Of String
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ 'C', 'CA', 'CAT', 'A', 'AT', 'T' ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



String.prototype.return_subset_String = function() 
{
    var subset_str = [];
    for (var i = 0; i < this.length; i++) 
    {
        for (var j = i + 1; j < this.length + 1; j++) 
        {
            subset_str.push(this.slice(i, j));
        }         
    }
    return subset_str;
};

console.log("CAT".return_subset_String());