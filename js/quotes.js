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
//Math.floor(1.9):소수점 아래자리 수를 버리고 정수만 쓴다
//Math.random() 0이상 1미만의 숫자를 무작위로 준다. 여기에 *10을 하면 0이상 10미만 사이의 숫자를 주므로 *quotes.length를 하면 quotes의 배열안의 자료 갯수(즉, 10개)를 곱해주는 효과가 있다.
//Math.ceil() 소수점을 올림 Math.round() 소수점반올림


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;