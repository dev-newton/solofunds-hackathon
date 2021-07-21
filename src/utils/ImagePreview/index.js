import React from "react";

import "./styles/imagePreview.css";

export const ImagePreview = ({ dataUri, isFullscreen, style }) => {
  let classNameFullscreen = isFullscreen ? "demo-image-preview-fullscreen" : "";

  return (
    <div className={"demo-image-preview " + classNameFullscreen}>
      <img src={dataUri} alt="img" style={style} />
    </div>
  );
};

export default ImagePreview;
