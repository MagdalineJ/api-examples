const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (json=> displayCountries(json))
}
loadCountries();
const displayCountries= data =>{
//   for (const country of data){
//       console.log(country.name.common);
//   }
const countriesDiv= document.getElementById('countries');

/////////using forEach//////////////
data.forEach(country => {
    // console.log(country.name.common)
    const div= document.createElement('div');
    div.classList.add('country')
    div.innerHTML=`
    <h3>${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick= "loadCountryByName('${country.name.common}')">Details</button>
    `;
// try to figure out why the parameter is inside single quotation. it is because we r writing code in js. if we use double quotation that also doesn't work s it is confuses the code starting and ending point.

    // const h3 = document.createElement('h3');
    // h3.innerText= country.name.common;
    // div.appendChild(h3);
    // const p =document.createElement('p');
    // p.innerText= country.capital;
    // div.appendChild(p);
    countriesDiv.appendChild(div);

});
    // console.log(countries)
}

const loadCountryByName = name =>{
    const url =`https://restcountries.com/v3.1/name/${name}`;
    // console.log(name);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country =>{
console.log(country)
const countryDiv = document.getElementById('country-detail');
countryDiv.innerHTML = `
<h2>${country.name.common}</h2>
<p> Population:${country.population} / Language: ${country.language}</p>
<img width="250px" src="${country.flags.png}">
`;
}
