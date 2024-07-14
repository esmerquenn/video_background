// import videoFile from './assets/2.mp4';
// import videoFileOgg from './assets/1.ogg';
// import videoFileWebm from './assets/1.webm';
// import videoImage from './assets/vid-image.png';
// import VideoBg2 from './components/VideoBg/VideoBg';
import './App.css';
import LazyLoadingBackground from './components/VideoBg/LazyLoadingBackground';
function App() {
	return (
		<>
			{/* <VideoBg2
				videoFileMp4={videoFile}
				videoFileWebm={videoFileWebm}
				videoFileOgg={videoFileOgg}
				// videoPoster={videoImage}
				darken={true}
				fullScreen={true}
				autoPlay={true}
				loop={true}
				muted={true}
				overlay={true}
				OverlayTopOffset={0}
				
			/> */}
			<LazyLoadingBackground/>
		</>
	);
}

export default App;
