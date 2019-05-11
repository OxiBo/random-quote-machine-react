import React from "react";

const Quote = props => {
  return (
    <div className="quote">
      {props.error && <p className="error">{props.error}</p>}

        <blockquote>
          {props.quote && props.isLoading && !props.error ? (
            <p> Loading...</p>
          ) : (
            props.quote
          )}
        </blockquote>
        <p id="author">{props.author}</p>
    </div>
  );
};

export default Quote;
