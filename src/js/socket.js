const url = "http://localhost:3300/"
export function initialSocket(){
    console.log('trying to connect..')
    var socket = io(url, {transports: ['websocket'], upgrade: false});
    socket.emit('chat_message', 'msg1');
}