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
        <button className='exit-button' onClick={() => props.setTrigger(false)}>
          X
        </button>
        <UploadPopup />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopupFrame
