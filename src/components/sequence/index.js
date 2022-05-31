import React from "react";
import video from ".../../../src/images/video.webm";

export default function Sequence() {
  return (
    <div className="container">
      <div className="video-wrapper">
        <video autoplay muted>
          <source src={video} />
        </video>
      </div>
    </div >
  );
}
