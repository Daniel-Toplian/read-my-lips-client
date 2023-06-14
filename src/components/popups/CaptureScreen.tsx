import React, { useRef, useState } from 'react'
import './style/CaptureScreenProps.css'

type CaptureScreenProps = {
  onSaveRecording: (recordedVideo: File | null) => void
}

function CaptureScreen({ onSaveRecording }: CaptureScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null)
  const [isRecording, setIsRecording] = useState(false)
  const [capturedVideo, setCapturedVideo] = useState<File | null>(null)

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      setMediaStream(stream)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setIsRecording(true)

      const mediaRecorder = new MediaRecorder(stream)
      const recordedChunks: Blob[] = []

      mediaRecorder.ondataavailable = (event) => {
        recordedChunks.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(recordedChunks, { type: 'video/mp4' })
        const recordedVideo = new File([recordedBlob], 'recorded_video.mp4', {
          type: 'video/mp4',
        })

        console.log(recordedVideo.size, recordedVideo.name, recordedVideo.type)
        setCapturedVideo(recordedVideo)
      }

      mediaRecorder.start()
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
    onSaveRecording(capturedVideo)
  }

  return (
    <div>
      {!isRecording && <h2>Recording in progress...</h2>}
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
