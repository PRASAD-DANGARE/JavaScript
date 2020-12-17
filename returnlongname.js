/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Description     :  JavaScript Program To Find Biggest City Name
// Function Date   :  17 Dec 2020
// Function Author :  Prasad Dangare
// Output          :  Mumbai
//
/////////////////////////////////////////////////////////////////////////////////////////////////////


function longest_city_name(city_name)
{
    return city_name.reduce(function(cityname, city) 
    {
    return cityname.length > city.length ? cityname : city;
    },"");
}

console.log(longest_city_name(["Pune", "Mumbai", "Delhi", "Goa"]));