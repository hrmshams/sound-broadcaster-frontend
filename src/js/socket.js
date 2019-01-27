const url = "http://localhost:3300/"

export default class MessageSocketConnection {
    constructor(onMessageGotCallback){
        this.initialSocket(onMessageGotCallback)
    }

    initialSocket(onMessageGotCallback){
        console.log('trying to connect..11')
        this.socket = io(url, {transports: ['websocket'], upgrade: false});

        this.socket.on('msg_from_server', function(msg){
            onMessageGotCallback(msg)
        });
    }

    sendMessage(text){
        console.log('access : ' + text)
        this.socket.emit('msg_from_client', text);    
    }
}