import './style/ResultPopup.css'

type ResultPopupProps = {
  resultText: string
}

function ResultPopup(props: ResultPopupProps) {
  const { resultText } = props

  return (
    <div className='result-content'>
      <h3 className='title'>Generated Text</h3>
      <p>{resultText}</p>
    </div>
  )
}

export default ResultPopup
