import React, { useEffect, useState } from 'react'
import SubmitVideoButton from './buttons/SubmitVideoButton';
import './style/VideoPopup.css';

type PopupProp = {
  selectedFile: File
}

function VideoPopup(props: PopupProp) {
  const { selectedFile } = props
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (selectedFile) {
      const src = URL.createObjectURL(selectedFile)
      setVideoSrc(src)
      return () => {
        URL.revokeObjectURL(src)
      }
    }
  }, [selectedFile])

  return (
    <div>
      {videoSrc ? (
        <video className="video-screen" src={videoSrc} controls />
      ) : (
        <p>Loading video...</p>
      )}
      <div className="button-placement">
        <SubmitVideoButton video={selectedFile}/> 
      </div>
    </div>
  )
}

export default VideoPopup
