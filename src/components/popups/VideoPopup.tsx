import React from 'react'

type PopupProp = {
  selectedFile: File
}

function VideoPopup(props: PopupProp) {
  const apiPath = 'http://localhost:5000/video-to-text';
  const { selectedFile } = props

  async function sendVideo() {
    if (selectedFile) {
      try {
        const formData = new FormData()
        formData.append('video', selectedFile)

        const response = await fetch(apiPath, {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          const responseData = await response.json();
          alert('File uploaded successfully: ' + responseData['generated_text'])
          // setSelectedFile(file) // Set the selected file in state
        } else {
          console.error('Error uploading file')
        }
      } catch (error) {
        console.error('Error uploading file', error)
      }
    }
  }

 
  return (
    <div>
      <video src={URL.createObjectURL(selectedFile)} controls />
      <button onClick={sendVideo}>Send</button>
    </div>
  )
}

export default VideoPopup
