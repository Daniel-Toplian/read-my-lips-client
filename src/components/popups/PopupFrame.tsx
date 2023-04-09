import PopupContent from './PopupContent'
import './style/PopupFrame.css'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

let showMe: boolean = true

function PopupFrame(props: PopupProp) {
  return props.trigger ? (
    showMe ? (
      <div className='upload-backgournd'>
        <div className='popup-block'>
          <button
            className='exit-button'
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
          <div className='content'>
            <PopupContent />
          </div>
        </div>
      </div>
    ) : (
      <div></div>
    )
  ) : (
    <div></div>
  )
}

export default PopupFrame
