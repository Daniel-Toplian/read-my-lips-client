import '../styles/UploadVideo.css'

type OptionProp = {
  imagePath: string
  title: string
  alt: string
  handleClickEvent: (value: void) => void
}

function UploadOption(props: OptionProp) {
  return (
    <div className='option-content'>
      <img src={props.imagePath} alt={props.alt} />
      <h4>{props.title}</h4>
    </div>
  )
}

export default UploadOption
