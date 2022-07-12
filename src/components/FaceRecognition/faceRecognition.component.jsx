import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="" src={imageUrl} width="300px" height="300px" />
      </div>
    </div>
  );
};

export default FaceRecognition;
