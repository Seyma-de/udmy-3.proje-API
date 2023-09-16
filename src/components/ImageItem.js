import React from "react";

const ImageItem = ({ image }) => {
  console.log(image);
  return (
    <div className="container d-flex">
      <div className="row">
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </div>
  );
};

export default ImageItem;
