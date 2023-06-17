import React, { useState } from 'react'
import LoadingScreen from '../../utils/LoadingScreen'
import './SubmitVideoButton.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type submitProp = {
  video: File
  setShowResultPopup: (isShown: boolean) => void
  setResultText: (text: string) => void
  setCancleHidden: () => void
}

function SubmitVideoButton({ video, setShowResultPopup, setResultText, setCancleHidden }: submitProp) {
  const [buttonText, setButtonText] = useState<React.ReactNode>('Submit')
  const [isButtonCircle, setIsButtonCircle] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [showLoadingScreen, setLoadingScreen] = useState(false)

  const apiPath = 'http://localhost:5000/video-to-text'

  const tickMark = (
    <svg
      width='58'
      height='45'
      viewBox='0 0 58 45'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='#fff'
        fillRule='nonzero'
        d='M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65'
      />
    </svg>
  )

  async function sendVideo() {
    const NOT_ACCEPTABLE = 406

    if (video && !isButtonDisabled) {
      setCancleHidden()
      setLoadingScreen(true)
      try {
        const formData = new FormData()
        formData.append('video', video)

        setIsButtonDisabled(true)
        changeButton()
        
        const response = await fetch(apiPath, {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          const responseData = await response.json()
          setResultText(responseData['generated_text'])
          setShowResultPopup(true)
          setLoadingScreen(false)
        } else {
          const responseData = await response.json()
          console.error('Error uploading file: ' + responseData['message'])
          toast.error(responseData['message'])
          setLoadingScreen(false)
        }
      } catch (error) {
        console.error('Error uploading file', error)
      }
    }
  }

  const changeButton = () => {
    setButtonText(tickMark)
    setIsButtonCircle(!isButtonCircle)
  }

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen />
      ) : (
        <div
          className={`button ${isButtonCircle ? 'button__circle' : ''}`}
          onClick={sendVideo}
        >
          <div className={`container ${isButtonDisabled ? 'disabled' : ''}`}>
            <div className='tick'>{buttonText}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default SubmitVideoButton
