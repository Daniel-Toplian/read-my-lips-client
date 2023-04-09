import './style/LogoSection.css'

function LogoSection() {
  return (
    <div className='logoSection'>
      <div>
        <img
          className='logo'
          src={process.env.PUBLIC_URL + '/ReadMyLipsLogo.png'}
          alt='ReadMyLips Inc. logo'
        />
      </div>
    </div>
  )
}

export default LogoSection
