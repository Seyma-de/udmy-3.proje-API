import React from "react";
import ImageItem from "./ImageItem";

const ImagesList = ({ imagesPlaceholder }) => {
  return (
    <div className="d-flex">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
};

export default ImagesList;
