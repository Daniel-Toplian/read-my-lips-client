import '../styles/LogoSection.css'

function LogoSection() {
  return (
    <section className='logoSection'>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/ReadMyLipsLogo.png'}
          alt='ReadMyLips Inc. logo'
        />
      </div>
    </section>
  )
}

export default LogoSection
