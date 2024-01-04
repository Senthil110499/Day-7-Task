

//  4)Print the total population of countries using reduce function

const URL = "https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload = () => {
    let country = JSON.parse(xhr.response);
    const population=country.reduce((val,obj)=>{
        return val+obj.population;
    })
    console.log(population);
}