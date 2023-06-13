import React, { useRef, useState } from 'react'
import UploadOption from './UploadOption'
import './style/UploadPopup.css'
import VideoPopup from './VideoPopup'
import CaptureScreen from './CaptureScreen'

function UploadPopup() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showCaptureScreen, setShowCaptureScreen] = useState<boolean>(false)

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

  return (
    <>
      {showCaptureScreen ? (
        <CaptureScreen onSaveRecording={handleSaveRecording} />
      ) : (
        <>
          {selectedFile ? (
            <VideoPopup selectedFile={selectedFile} />
          ) : (
            <div className='options-container'>
              <div className='upload-option'>
                <UploadOption
                  title='Upload from computer'
                  imagePath={process.env.PUBLIC_URL + 'computerIcon.png'}
                  alt='Upload from computer icon'
                  onClick={handleUploadFromComputer}
                />
                <input
                  type='file'
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelection}
                />
              </div>
              <div className='upload-option'>
                <UploadOption
                  title='Film video'
                  imagePath={process.env.PUBLIC_URL + 'camIcon.png'}
                  alt='Film video icon'
                  onClick={handleFilmVideo}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default UploadPopup
