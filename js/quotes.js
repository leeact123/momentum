const quotes = [
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "When you go through hardships and decide not to surrender, that is strength",
        author: "Arnold Schwarzenegger",
    },
    {
        quote: "Better late than never",
        author: "Anonymous",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant",
    },
    {
        quote: "Great minds have purposes, others have wishes.",
        author: "Washington Irving",
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "Stop chasing the money and start chasing the passion.",
        author: "Tony Hsieh",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote =quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;