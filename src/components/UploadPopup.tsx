import UploadOption from './UploadOption'
import '../styles/UploadVideo.css'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

function UploadPopup(props: PopupProp) {
  return props.trigger ? (
    <div className='upload-backgournd'>
      <div className='popup-block'>
        <button className='exit-button' onClick={() => props.setTrigger(false)}>
          X
        </button>
        <div className='options-container'>
          <div className='upload-option'>
            <UploadOption
              title='Upload from computer'
              imagePath={process.env.PUBLIC_URL + 'computerIcon.png'}
              alt='Upload from computer icon'
              handleClickEvent={uploadFromComputerAction}
            />
          </div>
          <div className='upload-option'>
            <UploadOption
              title='Film video'
              imagePath={process.env.PUBLIC_URL + 'camIcon.png'}
              alt='Film video icon'
              handleClickEvent={filmVideoAction}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  )
}

function uploadFromComputerAction(): void {}

function filmVideoAction(): void {}

export default UploadPopup
