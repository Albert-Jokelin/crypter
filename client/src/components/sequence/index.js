import React from "react"
import ReactPlayer from 'react-player'
import video from ".../../../src/images/video.webm"
import bg from ".../../../src/images/bg.jpg"

export default function Sequence() {
  return (
    <div className="container" style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: `no-repeat`,
      height: `100vh`,
      backgroundSize: `100% 100%`}}>
      <ReactPlayer url={video} muted={true} playing={true} loop={true} width='100vw' height='100vh'/>
    </div >
  );
}
