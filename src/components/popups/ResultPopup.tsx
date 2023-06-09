type ResultProps = {
 resultText: String
}


function ResultPopup(props: ResultProps) {
 const {resultText} = props
 return (
  <div>
   <p>{resultText}</p>
  </div>
 );
}


export default ResultPopup