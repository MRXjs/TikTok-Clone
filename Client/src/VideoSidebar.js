import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const VideoSidebar = ({likes,shares,messages}) => {
  const [liked,setLiked] = useState(false);

  return (
    <div className='video-sidebar'>
       <div className='video-sidebar-button'>
        {liked ? (
          <FavoriteIcon 
            fontSize='large'
            onClick = {() => setLiked(false)}
          />
        ): (
          <FavoriteBorderIcon
            fontSize='large'
            onClick = {(e)=> setLiked(true)}
          />
        )}
        <p>{liked ? likes+1 : likes }</p>
       </div>

       <div className='video-sidebar-button'>
         <MessageIcon fontSize='large'/>
         <p>{messages}</p>
       </div>

       <div className='video-sidebar-button'>
         <ShareIcon fontSize='large'/>
         <p>{shares}</p>
       </div>
    </div>
  )
}

export default VideoSidebar