/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Simplify The Given Path For A File
// Function Date   :  14 Jan 2021
// Function Author :  Prasad Dangare
// Output          :  /C:/Users/USER/OneDrive/Desktop/javascript
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function simplify_path_for_file(given_path) 
{
    var path = given_path.split('/'),
    new_path = [],
    size = 0;
    
    for (var i = 0; i < path.length; i++) 
    {
        var location = path[i];
        
        if (location === '.' || location === '' || location === '..') 
        {
            if (location === '..' && size > 0) 
            {
                size--;
            }
            continue;
        }
        new_path[size++] = location;
    }
  
    if (size === 0) 
    {
        return '/';
    }
  
    var simplify_path = '';
    
    for (var i = 0; i < size; i++) 
    {
        simplify_path +=  '/'+new_path[i] ;
    }
    return simplify_path;
}
  
console.log(simplify_path_for_file("C:/Users/USER/OneDrive/./www/../Desktop/javascript/"));