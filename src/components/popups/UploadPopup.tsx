import React, { useRef } from 'react'
import UploadOption from './UploadOption'
import './style/UploadPopup.css'

function UploadPopup() {

  const apiPath = 'http://localhost:5000/video-to-text';
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUploadFromComputer = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  async function handleFileSelected(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0] || null

    if (file) {
      try {
        const formData = new FormData()
        formData.append('video', file)

        const response = await fetch(apiPath, {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          const responseData = await response.json();
          alert('File uploaded successfully:' + responseData['generated_text'])
        } else {
          console.error('Error uploading file')
        }
      } catch (error) {
        console.error('Error uploading file', error)
      }
    }
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
          onChange={handleFileSelected}
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
  )
}

export default UploadPopup
