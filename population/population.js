
// 2)Get all the countries with a population of less than 2 lakhs using Filter function

const URL = "https://restcountries.com/v3.1/all";

const xhr=new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();
xhr.onload=() => {
   let country=JSON.parse(xhr.response);
   const data=country.filter((obj)=>{
        return obj.population<200000;
   })
    console.log(data);
}