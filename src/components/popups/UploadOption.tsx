import './style/UploadOption.css'

type OptionProp = {
  imagePath: string
  title: string
  alt: string
  onClick: Function
}

function UploadOption(props: OptionProp) {
  return (
    <>
      <img
        src={props.imagePath}
        alt={props.alt}
        className='option-img'
        onClick={() => props.onClick()}
      />
      <div className='option-title'>{props.title}</div>
    </>
  )
}

export default UploadOption
