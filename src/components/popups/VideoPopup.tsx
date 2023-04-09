type PopupProp = {
  trigger: boolean
  setTrigger: (value: boolean) => void
}

function VideoPopup(props: PopupProp) {
  return props.trigger ? <div></div> : <div></div>
}

export default VideoPopup
