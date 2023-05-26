import PopupContent from './PopupContent'
import './style/PopupFrame.css'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

let showMe: boolean = true

function PopupFrame(props: PopupProp) {
  return props.trigger ? (
    <div className='upload-backgournd'>
      <div className='popup-block'>
        <button className='exit-button' onClick={() => props.setTrigger(false)}>
          X
        </button>
        <PopupContent />
      </div>
    </div>
  ) : (
    <></>
  )
}

export default PopupFrame
