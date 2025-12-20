let quotes = [
    { text: "Just do it.", author: "Nike" },
    { text: "Think different.", author: "Apple" },
    { text: "Stay hungry.", author: "Steve Jobs" },
    { text: "Never give up.", author: "Unknown" },
    { text: "Dream big.", author: "Unknown" },
    { text: "Be yourself.", author: "Oscar Wilde" },
    { text: "Keep going.", author: "Unknown" },
    { text: "Stay positive.", author: "Unknown" },
    { text: "Believe yourself.", author: "Unknown" },
    { text: "Work hard.", author: "Unknown" },
    { text: "Be busy, be happy.", author: "Jaya Aich"}
];


    let printQuote = Math.floor(Math.random()*quotes.length);
    let finalQuote = quotes[printQuote];

    alert(`Your quote is "${finalQuote.text}" -- ${finalQuote.author}`);

