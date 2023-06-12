import './ExitButton.css'

type buttonProp = {
 onClick: () => void
}


function ExitButton(props: buttonProp) {
  return (<>
   <button className='exit-button' onClick={props.onClick}>
          X
    </button>  
  </>);
}


export default ExitButton;