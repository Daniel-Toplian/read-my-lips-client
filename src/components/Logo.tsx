import "../styles/LogoSection.css"

function Logo(){
    return (
        <div>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/ReadMyLipsLogo.png'} alt="ReadMyLips Inc. logo"/>          
            </div>
            <div className="sub-heading">
                <p id="title">We turn lip movements into text.</p>
            </div>
        </div>
    );
}

export default Logo;