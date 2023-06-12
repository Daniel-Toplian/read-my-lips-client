import { useRef, useState } from 'react'

type CaptureScreenProps = {
  onStopRecording: (recordedVideo: File) => void
}

function CaptureScreen({ onStopRecording }: CaptureScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)
  const [isRecording, setIsRecording] = useState(false)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      setMediaStream(stream)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setIsRecording(true)
    } catch (error) {
      console.error('Video recording error:', error)
    }
  }

  const stopRecording = () => {
    if (mediaStream && videoRef.current) {
      const tracks = mediaStream.getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setMediaStream(null)
      setIsRecording(false)
    }
  }

  const handleSaveRecording = () => {
    if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
      const mediaStream = videoRef.current.srcObject
      const mediaStreamTracks = mediaStream.getTracks()
      const mediaRecorder = new MediaRecorder(mediaStream)

      const recordedChunks: Blob[] = []

      mediaRecorder.ondataavailable = (event) => {
        recordedChunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' })
        const recordedVideo = new File([recordedBlob], 'recorded_video.webm')
        onStopRecording(recordedVideo)
      }

      mediaRecorder.start()

      setTimeout(() => {
        mediaRecorder.stop()
        mediaStreamTracks.forEach((track) => track.stop())
      }, 2000)
    }
  }

  return (
    <div>
      <h2>Recording in progress...</h2>
      <video ref={videoRef} autoPlay muted />
      <div>
        {!isRecording && (
          <button onClick={startRecording}>Start Recording</button>
        )}
        {isRecording && <button onClick={stopRecording}>Stop Recording</button>}
        <button onClick={handleSaveRecording} disabled={isRecording}>
          Save Recording
        </button>
      </div>
    </div>
  )
}

export default CaptureScreen
