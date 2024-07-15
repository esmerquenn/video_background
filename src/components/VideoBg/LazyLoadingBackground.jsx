// import { useEffect, useRef, useState } from "react";
// import video1 from "./../../assets/2.mp4";
// import video2 from "./../../assets/anime002.mp4";
// import video3 from "./../../assets/aaa.mp4";
// import video4 from "./../../assets/aaaa.mp4";
// import "./VideoBg.css";
// function LazyLoadingBackground() {
//   const videoRef = useRef(null);
//   const [width, setWidth] = useState(false);

//   const switchToSecondVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.src = width ? video4 : video2;
//       //   videoRef.current.src = video2;
//       videoRef.current.play();
//     }
//     console.log(videoRef.current.src, video2);
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768 && videoRef.current) {
//         setWidth(true);
//         videoRef.current.src = video3;
//         videoRef.current.play();
//       } else if (videoRef.current) {
//         videoRef.current.src = video1;
//         setWidth(false);
//         videoRef.current.play();
//       }
//     };

//     // Initial check on mount
//     handleResize();

//     // Event listener for resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div className="videobg-container ">
//       <video
//         ref={videoRef}
//         className="video_bg video-element"
//         preload="auto"
//         onEnded={switchToSecondVideo}
//         autoPlay
//         muted
//       >
//         <source src={video1} type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default LazyLoadingBackground;
// import { useEffect, useRef } from "react";
// import video1 from "./../../assets/2.mp4";
// import video2 from "./../../assets/anime002.mp4";
// import video3 from "./../../assets/aaa.mp4";
// import video4 from "./../../assets/aaaa.mp4";
// import "./VideoBg.css";

// function LazyLoadingBackground() {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);

//   useEffect(() => {
//     const handleVideoEnded = () => {
//       // İlk video bittiğinde, ikinci videoyu başlat
//       videoRef1.current.style.display = "none"; // İlk videoyu gizle
//       videoRef2.current.style.display = "block"; // İkinci videoyu göster
//       videoRef2.current.play(); // İkinci videoyu başlat
//     };

//     // İlk videoya onEnded olayı ekle
//     videoRef1.current.addEventListener("ended", handleVideoEnded);

//     // Temizleme fonksiyonu
//     return () => {
//       videoRef1.current.removeEventListener("ended", handleVideoEnded);
//     };
//   }, []);

//   return (
//     <div className="videobg-container">
//       {/* İlk video */}
//       <video ref={videoRef1} className="video_bg video-element" preload="auto" autoPlay muted>
//         <source src={video1} type="video/mp4" />
//       </video>

//       {/* İkinci video (başlangıçta gizli) */}
//       <video ref={videoRef2} className="video_bg video-element" loop preload="auto" muted style={{ display: "none" }}>
//         <source src={video2} type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default LazyLoadingBackground;

// import { useEffect, useRef } from 'react';
// import useWidth from './UseWidth';
// import video1 from './../../assets/2.mp4';
// import video2 from './../../assets/anime002.mp4';
// import video3 from './../../assets/aaa.mp4';
// import video4 from './../../assets/aaaa.mp4';
// import './VideoBg.css';

// function LazyLoadingBackground() {
//   const videoRef1 = useRef(null);
//   const videoRef2 = useRef(null);
//   const width = useWidth();

//   useEffect(() => {
//     const handleVideo1Ended = () => {
//       videoRef1.current.style.display = 'none';
//       videoRef2.current.style.display = 'block';
//       videoRef2.current.play();
//     };

//     videoRef1.current.addEventListener('ended', handleVideo1Ended);
//     return () => {
//       videoRef1.current.removeEventListener('ended', handleVideo1Ended);
//     };
//   }, [width]);

//   useEffect(() => {
//     if (width < 768) {

//       videoRef1.current.src = video3;
//       videoRef2.current.src = video4;
//       videoRef2.current.play();
//       console.log('kucuk');
//     } else {
//       videoRef1.current.src = video1;
//       videoRef2.current.src = video2;
//       console.log('buyuk');
//       videoRef1.current.play();
//     }
//   }, [width]);

//   return (
//     <div className="videobg-container">
//       <video
//         ref={videoRef1}
//         className="video_bg video-element"
//         preload="auto"
//         autoPlay
//         muted
//         style={{ display: 'block' }}
//       >
//         <source src={video1} type="video/mp4" />
//       </video>

//       <video
//         ref={videoRef2}
//         className="video_bg video-element"
//         preload="auto"
//         muted
//         loop
//         style={{ display: 'none' }}
//       >
//         <source src={video2} type="video/mp4" />
//       </video>
//     </div>
//   );
// }

// export default LazyLoadingBackground;

import { useEffect, useRef, useState } from "react";
import useWidth from "./UseWidth";
import video1 from "./../../assets/2.mp4";
import video2 from "./../../assets/anime002.mp4";
import video3 from "./../../assets/aaa.mp4";
import video4 from "./../../assets/aaaa.mp4";
import "./VideoBg.css";

function LazyLoadingBackground() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const width = useWidth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleVideo1Ended = () => {
      videoRef1.current.style.display = "none";
      videoRef2.current.style.display = "block";
      videoRef2.current.play();
    };

    const handleVideoLoaded = () => {
      setLoading(false);
    };

    videoRef1.current.addEventListener("ended", handleVideo1Ended);
    videoRef1.current.addEventListener("canplaythrough", handleVideoLoaded);
    videoRef2.current.addEventListener("canplaythrough", handleVideoLoaded);

    return () => {
      videoRef1.current.removeEventListener("ended", handleVideo1Ended);
      videoRef1.current.removeEventListener("canplaythrough", handleVideoLoaded);
      videoRef2.current.removeEventListener("canplaythrough", handleVideoLoaded);
    };
  }, [width]);

  useEffect(() => {
    setLoading(true);
    if (width < 768) {
      videoRef1.current.src = video3;
      videoRef2.current.src = video4;
      videoRef2.current.play();
      console.log("kucuk");
    } else {
      videoRef1.current.src = video1;
      videoRef2.current.src = video2;
      console.log("buyuk");
      videoRef1.current.play();
    }
  }, [width]);

  return (
    <div className="videobg-container">
      {loading && <div className="loading-spinner">Loading...</div>}
      <video ref={videoRef1} className="video_bg video-element" preload="auto" autoPlay muted style={{ display: "block" }}>
        <source src={video1} type="video/mp4" />
      </video>

      <video ref={videoRef2} className="video_bg video-element" preload="auto" muted loop style={{ display: "none" }}>
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  );
}

export default LazyLoadingBackground;
