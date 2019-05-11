import axios from "axios";

const baseURL = 'http://quotes.stormconsultancy.co.uk/random.json';

// const baseURL = "https://quota.glitch.me/random";

// const baseURL = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1"; //{cache: "reload"}

// const baseURL = "https://github.com/lukePeavey/quota";

const newQuote = async () => {
  let response = {};

  try {
    const quote = await axios.get(baseURL);
    response = {
        quoteText: quote.data.quote,
        quoteAuthor: quote.data.author,
        quoteURL: quote.data.permalink
      };

/* API call with fetch and other API
    const quote = await fetch(baseURL, {cache: "reload"}).then(response => response.json());
    const { content, title, link } = quote[0];
    response = {
        quoteText: content.replace(/<[^>]*>/g, ""),//replace any html tags
        quoteAuthor: title,
        quoteURL: link
      };
      */
    
  } catch (error) {
    console.error(error);
    response = {
      error: "Failed to load a new quote",
      isLoading: false
    };
  }

  return response;
};

export { newQuote };

// import fetchJsonp from "fetch-jsonp";

// // const fetch = fetchJsonp();
// const jsonp = require("jsonp");

//   try {
//     const data = fetchJsonp(
//       "https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?"
//     ).then(response => response.json());
//     console.log(data);
//     //   response = data;
//   } catch (error) {
//     console.error(error);
//   }
// jsonp('https://crossorigin.me/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?', null, (err, data) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log(data);
//     }
//   });
