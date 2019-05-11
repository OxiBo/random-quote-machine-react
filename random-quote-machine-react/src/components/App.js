import React, { Component } from "react";
import { newQuote } from "../apis/getQuote.js";
import Quote from "./Quote";
import NewQuote from "./NewQuote";
import TweetBtn from "./TweetBtn";
import FacebookBtn from "./FacebookBtn";

export default class App extends Component {
  state = {
    quote: "Get Your New Quote",
    author: "",
    url: "",
    firstLoad: false,
    isLoading: false,
    error: ""
  };

  getQuote = async event => {
    event.preventDefault();

    const { quoteText, quoteAuthor, quoteURL, error } = await newQuote();
    this.setState({
      isLoading: true
    });

    if (error) {
      this.setState({ error, isLoading: false });
    } else {
      this.setState({
        quote: quoteText,
        author: quoteAuthor,
        url: quoteURL,
        isLoading: false,
        error: "",
        firstLoad: true
      });
    }
  };

  render() {
    const { quote, author, url, isLoading, firstLoad, error } = this.state;
    return (
      <div className="container">
        <header>
          <h1>Random Quote Engine</h1>
        </header>
        <main>
          <Quote
            quote={quote}
            author={author}
            url={url}
            isLoading={isLoading}
            error={error}
          />

          <div className="button-container">
            <NewQuote getQuote={this.getQuote} />
            {firstLoad && quote && <TweetBtn quote={quote} author={author} />}
            {firstLoad && quote && (
              <FacebookBtn quote={quote} author={author} url={url} />
            )}
          </div>
        </main>

        <footer>Written and coded by OxiBo, 2019</footer>
      </div>
    );
  }
}
