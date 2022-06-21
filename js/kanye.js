const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data=> displayQuote(data))
}
// loadQuotes()
const displayQuote = data =>{
    // console.log(data)
    const quote = document.getElementById('quote');
  quote.innerText= data.quote; 
}