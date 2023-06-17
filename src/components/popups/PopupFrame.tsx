import ExitButton from './buttons/ExitButton'
import './style/PopupFrame.css'
import UploadPopup from './UploadPopup'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

function PopupFrame({ setTrigger, trigger }: PopupProp) {

  const handleExit = () => {
    setTrigger(false)
  }

  return trigger ? (
    <div className='upload-backgournd'>
      <div className='popup-block'>
        <ExitButton onClick={handleExit}/>
        <UploadPopup />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopupFrame
