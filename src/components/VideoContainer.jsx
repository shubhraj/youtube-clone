import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
      getVideoData();
  },[]);

  const getVideoData = async ()=> {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    setVideoData(data.items);
  }

  return (
    <div className="flex flex-wrap">
      {videoData.map(video => <VideoCard key={video.id} data={video}/>)}
    </div>
  )
}

export default VideoContainer