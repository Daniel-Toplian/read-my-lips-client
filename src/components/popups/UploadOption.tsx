import './style/UploadOption.css'

type OptionProp = {
  imagePath: string
  title: string
  alt: string
}

function UploadOption({ imagePath, alt, title }: OptionProp) {
  return (
    <>
      <img
        src={imagePath}
        alt={alt}
        className='option-img'
      />
      <div className='option-title'>{title}</div>
    </>
  )
}

export default UploadOption
