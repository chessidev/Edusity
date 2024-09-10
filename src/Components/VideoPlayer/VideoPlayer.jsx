import "./VideoPlayer.css";
import video from "../../assets/images/video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ isVideo, setVideo }) => {
  const videoContainer = useRef();
  const closeVideo = (e) => {
    if (e.target === videoContainer.current) setVideo(false);
  };
  return (
    <div
      className={`video-container ${isVideo ? "" : "hide"}`}
      ref={videoContainer}
      onClick={closeVideo}
    >
      <video src={video} controls></video>
    </div>
  );
};

export default VideoPlayer;
