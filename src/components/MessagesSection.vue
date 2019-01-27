<template>
    <div class = "flex column" id="body">
        <Message 
            v-for = "(msg, index) in message" 
            :type = "msg.type"
            :sender = "msg.sender"
            :text = "msg.text"
            :key = "index"
        >
        </Message>
    </div>
</template>

<script>
import Message from './Message'
export default {
    components : {
        Message
    },
    data(){
        return{
            message : [{
                type : 'me',
                text : 'my message'
            }, {
                type : 'others',
                text : 'a test message',
                sender : 'koroush'
            }, {
                type : 'me',
                text : 'sakldjaslkdjaskldjkasldlkasjdlkasjdlka asd asda sd asd sasd'
            } 
            ]
        }
    },
    methods : {
        sendMyMessage : function(text){
            this.message.push({
                type : 'me',
                text : text
            })
        },
        sendOthersMessage : function(sender, text){
            this.message.push({
                sender : sender,
                type : 'others',
                text : text,
            })
        }
    }

}
</script>

<style>
#body {
    flex:1;
    background-color : #4fefb0;
    overflow-y: scroll;
}
</style>