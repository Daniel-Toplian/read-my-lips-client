import { useState } from 'react'
import '../styles/UploadVideo.css'
import UploadPopup from './UploadPopup'

function UploadSection() {
  const [popupTrigger, setPopupTrigger] = useState<boolean>(false)

  const handleUploadButtonClick = (): void => {
    setPopupTrigger(true)
  }

  return (
    <section id='upload-section'>
      <div id='content-wrapper'>
        <button id='upload-button' onClick={handleUploadButtonClick}>
          Add video
        </button>
        <h4>It doesn't have to contain sound :)</h4>
        <UploadPopup trigger={popupTrigger} setTrigger={setPopupTrigger} />
      </div>
    </section>
  )
}

export default UploadSection
