import { useEffect, useRef, useState } from "react";
import video1 from "./../../assets/2.mp4";
import video2 from "./../../assets/anime002.mp4";
import video3 from "./../../assets/anime0003.mp4";
import video4 from "./../../assets/anime0004.mp4";
// import "./Background.css";
import "./VideoBg.css";
function LazyLoadingBackground() {
  const videoRef = useRef(null);
  const [width, setWidth] = useState(false);

  const switchToSecondVideo = () => {
    if (videoRef.current) {
      videoRef.current.src = width ? video4 : video2;
      //   videoRef.current.src = video2;
      videoRef.current.play();
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768 && videoRef.current) {
        setWidth(true);
        videoRef.current.src = video3;
        videoRef.current.play();
      } else if (videoRef.current) {
        videoRef.current.src = video1;
        setWidth(false);
        videoRef.current.play();
      }
    };

    // Initial check on mount
    handleResize();

    // Event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="videobg-container ">
      <video
        ref={videoRef}
        className="video_bg video-element"
        preload="auto"
        onEnded={switchToSecondVideo}
        loop={video1 == video4 ? true : false}
        autoPlay
        muted
      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
  );
}

export default LazyLoadingBackground;
