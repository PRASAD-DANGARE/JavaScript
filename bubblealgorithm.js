/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Bubble Sort The Algorithm
// Function Date   :  02 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  [ -1, 1, 2, 3, 4, 5 ]
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////



Array.prototype.bubbleSort_algorithm = function() 
{
    var bubble_sort = false;
    while (!bubble_sort) 
    {
        bubble_sort = true;
        for (var i = 0; i < this.length - 1; i++) 
        {
            if (this[i] > this[i+1])
            {
                var j = this[i+1];
                this[i+1] = this[i];
                this[i] = j;
                bubble_sort = false;
            }
        }
    }
    return this;
};

console.log([5,-1,2,1,3,4].bubbleSort_algorithm());