import React, { useRef, useState } from 'react'
import UploadOption from './UploadOption'
import './style/UploadPopup.css'
import VideoPopup from './VideoPopup'
import CaptureScreen from './CaptureScreen'
import { useMediaQuery } from 'react-responsive';

function UploadPopup() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showCaptureScreen, setShowCaptureScreen] = useState<boolean>(false)

  const isMobile = useMediaQuery({ maxWidth: 650 })

  const handleUploadFromComputer = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    setSelectedFile(file)
  }

  const handleFilmVideo = () => {
    setShowCaptureScreen(true)
  }

  const handleSaveRecording = (recordedVideo: File | null) => {
    setSelectedFile(recordedVideo)
    setShowCaptureScreen(false)
  }

  const handleReturnToMenu = () => {
    setSelectedFile(null)
  }

  return (
    <>
      {showCaptureScreen ? (
        <CaptureScreen onSaveRecording={handleSaveRecording} />
      ) : (
        <>
          {selectedFile ? (
            <VideoPopup
              selectedFile={selectedFile}
              returnToMenu={handleReturnToMenu}
            />
          ) : (
            <div className='options-container'>
              <div className='upload-option' onClick={handleUploadFromComputer}>
                <UploadOption
                  title='Upload video'
                  imagePath={process.env.PUBLIC_URL + 'computerIcon.png'}
                  alt='Upload video icon'
                />
                <input
                  type='file'
                  accept='video/*'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelection}
                />
              </div>
              {
                !isMobile &&
                <div className='upload-option' onClick={handleFilmVideo}>
                  <UploadOption
                    title='Film video'
                    imagePath={process.env.PUBLIC_URL + 'camIcon.png'}
                    alt='Film video icon'
                  />
                </div>
              }
            </div>
          )}
        </>
      )}
    </>
  )
}

export default UploadPopup
