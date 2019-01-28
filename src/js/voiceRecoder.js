export default class VoiceRecorder {
    constructor(){
        this.getMediaRecorder()
    }

    getMediaRecorder(){
        let self = this
        navigator.mediaDevices.getUserMedia({audio : true})
        .then(stream => {
            self.mediaRecorder = new MediaRecorder(stream)
        })
    }

    startRecording(){
        this.mediaRecorder.start()
        const audioChunks = []
        this.mediaRecorder.addEventListener("dataavailable", (event)=>{
            audioChunks.push(event.data)
        })
    }

    stopRecording(){
        this.mediaRecorder.stop()
    }

    convertChunkToAudio(chunks){
        const audioBlob = new Blob(chunks)
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
    }

} 