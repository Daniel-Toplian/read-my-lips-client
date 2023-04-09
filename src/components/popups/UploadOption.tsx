import './style/UploadOption.css'

type OptionProp = {
  imagePath: string
  title: string
  alt: string
  isComputerInput: boolean
  handleClickEvent: (file: File | null) => void
}

function UploadOption(props: OptionProp) {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    props.handleClickEvent(file)
  }

  const handleRecording = () => {
    let blobFile: Blob = recoredVideo()

    if (blobFile == null) {
      alert('Unable to recored video')
      window.location.replace('Read my lips team')
      return
    }

    const newFile = new File([blobFile], 'video.mp4', {
      type: blobFile.type,
      lastModified: Date.now(),
    })
    props.handleClickEvent(newFile)
  }

  return (
    <div className='option-content'>
      <label>
        {props.isComputerInput ? (
          <div>
            <img src={props.imagePath} alt={props.alt} className='option-img' />
            <input
              type='file'
              accept='.mp4'
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>
        ) : (
          <img
            src={props.imagePath}
            alt={props.alt}
            onClick={handleRecording}
            className='option-img'
          />
        )}

        <h4>{props.title}</h4>
      </label>
    </div>
  )
}

function recoredVideo(): Blob {
  let file: Blob = null!
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      const recorder = new MediaRecorder(stream)
      recorder.ondataavailable = function (e) {
        file = e.data
      }
      recorder.start()
      setTimeout(function () {
        recorder.stop()
        stream.getTracks().forEach((track) => track.stop())
      }, 10000)
    })
    .catch(function (err) {
      console.error(err)
    })

  return file
}

export default UploadOption
