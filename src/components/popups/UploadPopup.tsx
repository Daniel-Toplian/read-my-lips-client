import React, { useRef, useState } from 'react'
import UploadOption from './UploadOption'
import './style/UploadPopup.css'
import VideoPopup from './VideoPopup'

function UploadPopup() {

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

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
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          console.log('Video stream:', stream)
        })
        .catch((error) => {
          console.error('Video recording error:', error)
        })
    } else {
      console.error('Video recording not supported')
    }
  }

  return (
    <>
      {selectedFile ? (
        <VideoPopup selectedFile={selectedFile}/>
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
  )
}

export default UploadPopup
