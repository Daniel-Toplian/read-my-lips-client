import UploadOption from './UploadOption'
import './style/UploadPopup.css'

function UploadPopup() {
  return (
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
  )
}

const uploadFromComputerAction = (file: File | null): void => {
  if (file && file.type === 'video/mp4') {
    console.log('Selected video file:', file)
    // show choosenInput popup
  } else {
    window.alert('Please select a valid MP4 video file.')
    window.location.replace('Read my lips team')
  }
}

const filmVideoAction = (file: File | null): void => {
  if (file && file.type === 'video/mp4') {
    console.log('Selected video file:', file)
    // show choosenInput popup
  } else {
    window.alert('Please select a valid MP4 video file.')
    window.location.replace('Read my lips team')
  }
}

export default UploadPopup
