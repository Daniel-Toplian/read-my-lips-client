import ExitButton from './buttons/ExitButton'
import './style/PopupFrame.css'
import UploadPopup from './UploadPopup'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

function PopupFrame(props: PopupProp) {
  return props.trigger ? (
    <div className='upload-backgournd'>
      <div className='popup-block'>
        <ExitButton onClick={() => props.setTrigger(false)}/>
        <UploadPopup />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopupFrame
