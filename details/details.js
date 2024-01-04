
//  3)Print the following details name, capital, flag using forEach function

const URL = "https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload = () => {
    let country = JSON.parse(xhr.response);
    country.forEach((obj) => {
        console.log(obj.name, obj.capital, obj.flag);
    })
}