
// 1)Get all the countries from Asia continent /region using Filter function

const URL = "https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=() => {
    let country=JSON.parse(xhr.response);
    const asia = country.filter((obj) => {
        if (obj.region === "Asia") {
            return obj.name;
        }
    })
    console.log(asia);
}
    