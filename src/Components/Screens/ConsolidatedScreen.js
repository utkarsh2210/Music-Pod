import React from "react";

const ConsolidatedScreen = ({ nameOfClass, headingName, imgSrc, imgAlt }) => {
  return (
    <div className={`screen-${nameOfClass}`}>
      <h1>{headingName}</h1>
      <div>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ConsolidatedScreen;
