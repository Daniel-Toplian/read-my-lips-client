import './ExitButton.css'

type buttonProp = {
 onClick: () => void
}


function ExitButton({ onClick }: buttonProp) {
  return (<>
   <button className='exit-button' onClick={onClick}>
          X
    </button>  
  </>);
}


export default ExitButton;