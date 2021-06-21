const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `- Kent Beck`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `- Harold Abelson`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `- Muhammad Waseem`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `- Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `- C.A.R. Hoare`
}, ]


const quoteBtn = document.getElementById('quote-btn');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

var random = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[random].quote;
author.innerHTML = quotes[random].author;

function qq(){
var random = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[random].quote;
author.innerHTML = quotes[random].author;
}
