import React, { useEffect, useState } from 'react'
import SubmitVideoButton from './buttons/SubmitVideoButton'
import ResultPopup from './ResultPopup'
import './style/VideoPopup.css'

type PopupProp = {
  selectedFile: File
}

function VideoPopup(props: PopupProp) {
  const { selectedFile } = props
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined)
  const [showResultPopup, setShowResultPopup] = useState(false)
  const [resultText, setResultText] = useState<string>('')

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
    <>
      <div className='video-container'>
        {videoSrc ? (
          <video className='video-screen' src={videoSrc} controls />
        ) : (
          <p>Loading video...</p>
        )}
        <div className='component-placement'>
          {showResultPopup ? (
            <ResultPopup resultText={resultText} />
          ) : (
            <SubmitVideoButton
              video={selectedFile}
              setShowResultPopup={setShowResultPopup}
              setResultText={setResultText}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default VideoPopup
