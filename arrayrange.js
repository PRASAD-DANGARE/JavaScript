/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Check Weather The Number Is In Range Or Not
// Function Date   :  12 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  [ 0, 1, 2, 3, 4, 5, 6 ]
//                 :  [ -1, 0, 1, 2, 3, 4, 5, 6 ]
//
/////////////////////////////////////////////////////////////////////////////////////////////////////



function rangearr(start, end) 
{
  
        if (start > end) 
        {
			var arr = new Array(start - end + 1);
            for (var i = 0; i < arr.length; i++, start--) 
            {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		    for (var j = 0; j < arro.length; j++, start++) 
            {
			    arro[j] = start;
		    }
      		return arro;
	   }
}

console.log(rangearr(0, 6));
console.log(rangearr(-1, 6));