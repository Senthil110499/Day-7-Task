
// 5)Print the country that uses US dollars as currency.

const URL = "https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=() => {
    let countries=JSON.parse(xhr.response);
    const data = Object.keys(countries).filter(obj =>
        countries[obj].currencies === "USD");
    console.log(data);
    }
