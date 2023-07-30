const view = document.querySelector(".content")
const button = document.querySelector(".btn")

//METHOD ONE 
//Function to fetch Quote using the .then method 

const fetchQuote = () => {
    const apiUrl = 'https://api.adviceslip.com/advice';

    fetch(apiUrl)
    .then((res) => res.json()) //reading response as Json
    .then((quote) => view.innerHTML = quote.slip.advice);
}



//METHOD TWO 
//function to fetch quote using async await 
// const fetchQuote = async () => {
// const apiUrl = 'https://api.adviceslip.com/advice';

// const response = await fetch(apiUrl)
// const quotes = await response.json() //reading response as json
    // view.innerHTML = quotes.slip.advice;
// }

button.addEventListener('click', fetchQuote)
document.addEventListener('DOMContentLoaded', fetchQuote)