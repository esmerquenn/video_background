import { useRef } from "react";
import video1 from "./../../assets/2.mp4";
import video2 from "./../../assets/anime002.mp4";
// import "./Background.css";
import './VideoBg.css';
function LazyLoadingBackground() {
  const videoRef = useRef(null);

  const switchToSecondVideo = () => {
    if (videoRef.current) {
      videoRef.current.src = video2;
      videoRef.current.play();
    }
  };
  return (
    <div className="videobg-container ">
      <video ref={videoRef} className="video_bg video-element" onEnded={switchToSecondVideo} autoPlay muted>
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
}

export default LazyLoadingBackground;
