import UploadOption from './UploadOption'
import '../styles/UploadVideo.css'
import ShowVideoPopup from './ShowVideoPopup'

type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

let showMe: boolean = true

function UploadPopup(props: PopupProp) {
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
          <div className='options-container'>
            <div className='upload-option'>
              <UploadOption
                isComputerInput={true}
                title='Upload from computer'
                imagePath={process.env.PUBLIC_URL + 'computerIcon.png'}
                alt='Upload from computer icon'
                handleClickEvent={uploadFromComputerAction}
              />
            </div>
            <div className='upload-option'>
              <UploadOption
                isComputerInput={false}
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
  ) : (
    <div></div>
  )
}

function uploadFromComputerAction(file: File | null): void {
  if (file && file.type === 'video/mp4') {
    console.log('Selected video file:', file)
    // show choosenInput popup
  } else {
    window.alert('Please select a valid MP4 video file.')
    window.location.replace('Read my lips team')
  }
}

function filmVideoAction(file: File | null): void {
  if (file && file.type === 'video/mp4') {
    console.log('Selected video file:', file)
    // show choosenInput popup
  } else {
    window.alert('Please select a valid MP4 video file.')
    window.location.replace('Read my lips team')
  }
}

export default UploadPopup
