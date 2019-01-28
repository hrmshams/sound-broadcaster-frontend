const url = "http://localhost:3300/"

export default class MessageSocketConnection {
    constructor(onMessageGotCallback){
        this.initialSocket(onMessageGotCallback)
    }

    initialSocket(onMessageGotCallback, onVoiceGotCallback){
        console.log('trying to connect..11')
        this.socket = io(url, {transports: ['websocket'], upgrade: false});

        this.socket.on('msg_from_server', function(msg){
            onMessageGotCallback(msg)
        });
        this.socket.on('voice_from_server', function(voice){
            onVoiceGotCallback(voice)
        })
    }

    sendMessage(text){
        console.log('access : ' + text)
        this.socket.emit('msg_from_client', text);    
    }

    sendVoiceChunk(voice){
        this.socket.emit('voice_from_client', voice)
    }
}