import React from "react";

const NewQuote = props => {
  return (
    <button
      className="fa fa-quote-right"
      onClick={props.getQuote}
    >
      Get a new quote
    </button>
  );
};

export default NewQuote;

