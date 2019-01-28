export default class VoiceRecorder {
    constructor(){
    }

    getMediaRecorder(onGot){
        let self = this
        navigator.mediaDevices.getUserMedia({audio : true})
        .then(stream => {
            const mediaRecorder = new MediaRecorder(stream)
            console.log('stream is got!')
            onGot(mediaRecorder)
        })
    }

    startRecording(){
        let self = this
        this.getMediaRecorder((mediaRecorder) =>{
            this.mediaRecorder = mediaRecorder
            mediaRecorder.start()
            const audioChunks = []
            mediaRecorder.addEventListener("dataavailable", (event)=>{
                audioChunks.push(event.data)
                // console.log(event.data)
            })
        })
    }

    stopRecording(){
        console.log('stoping')
        this.mediaRecorder.stop()
        this.mediaRecorder = null
    }

    convertChunkToAudio(chunks){
        const audioBlob = new Blob(chunks)
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
    }

} 