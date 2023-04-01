import "../styles/LogoSection.css"

function Logo(){
    return (
        <section className="logoSection">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/ReadMyLipsLogo.png'} alt="ReadMyLips Inc. logo"/>          
            </div>
            <div className="sub-heading">
                <p id="title">We turn lip movements into text.</p>
            </div>
        </section>
    );
}

export default Logo;