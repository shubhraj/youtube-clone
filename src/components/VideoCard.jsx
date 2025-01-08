import React from 'react'

const VideoCard = ({data}) => {
   const {snippet, statistics} = data; 
   const {title, channelTitle, thumbnails} = snippet;
   const { viewCount } = statistics;

  return (
    <div className='shadow-lg w-80 p-2 m-2'>
        <img alt='thumbnail'
            className='rounded-lg'
            src={thumbnails.medium.url}
         />
         <ul>
            <li className='py-2 font-bold'>{title}</li>
            <li className='py-1 text-gray-400'>{channelTitle}</li>
            <li className='py-1'>{viewCount} views</li>
         </ul>
    </div>
  )
}

export default VideoCard