import React from "react";

const TweetBtn = props => {
 
  const tweet = event => {
    event.preventDefault();

    const urlTweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${props.quote} -${props.author}`
    )}`;

    window.open(urlTweet, "_blank");
  };

  return (
    <button
      className="fa fa-twitter"
      onClick={tweet}
    >
      Tweet
    </button>
  );
};

export default TweetBtn;
