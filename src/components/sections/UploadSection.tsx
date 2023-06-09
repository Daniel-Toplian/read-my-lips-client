import { useState } from 'react'
import './style/UploadSection.css'
import PopupFrame from '../popups/PopupFrame'

function UploadSection() {
  const [uploadOptionsTrigger, setuploadOptionsTrigger] =
    useState<boolean>(false)

  const handleUploadButtonClick = (): void => {
    setuploadOptionsTrigger(true)
  }

  return (
    <div id='upload-section'>
      <div id='content-wrapper'>
        <button id='upload-button' onClick={handleUploadButtonClick}>
          Add video
        </button>
        <h4>It doesn't have to contain sound :)</h4>
        <PopupFrame
          trigger={uploadOptionsTrigger}
          setTrigger={setuploadOptionsTrigger}
        />
      </div>
    </div>
  )
}

export default UploadSection
