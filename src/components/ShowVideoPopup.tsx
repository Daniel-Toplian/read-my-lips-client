type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

function ShowVideoPopup(props: PopupProp) {
  return props.trigger ? <div></div> : <div></div>
}

export default ShowVideoPopup
