<template>
    <div class = "flex column" id="body">
        <Message 
            v-for="(msg, index) in message" 
            :type = "msg.type"
            :sender = "msg.sender"
            :text = "msg.text"
            :key="index"
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
                text : 'sakldjaslkdjaskldjkasldlkasjdlkasjdlkasdjlaksdjaskldjaslkdjaslkdjlas askl aslk djaskl djasldk ja asd as da sd as d sa as das d as d asd asda sd asd sasd'
            } 
            ]
        }
    }

}
</script>

<style>
#body {
    flex:1;
    background-color : #4fefb0
}
</style>