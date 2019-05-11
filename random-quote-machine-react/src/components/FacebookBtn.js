import React from 'react'

const FacebookBtn = (props) => {
    const facebook = (event) => {
        event.preventDefault();
        const urlFB = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(`${props.url}`)}`;
        window.open(urlFB, "_blank");
    }
  return (
    <button
              className="fa fa-facebook"
              onClick={facebook}
            >
              Facebook
            </button>
  )
}

export default FacebookBtn
