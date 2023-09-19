import React from "react";

const ImageItem = ({ image }) => {
  console.log(image);
  return (
    <div className="kapsayici">
      <div className="cart">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </div>
  );
};

export default ImageItem;
