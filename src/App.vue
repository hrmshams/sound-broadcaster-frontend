<template>
  <div id="app">
    
    <div class = "container flex column fullSize">
      <Header></Header>
      <MessagesSection ref="messageSection"></MessagesSection>
      <Sender @sendBtnHandler = "sendBtnPressed"></Sender>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import MessagesSection from './components/MessagesSection'
import Sender from './components/Sender'
import {getIndex} from './js/apiConnector.js'
import MessageSocketConnection from './js/socket.js'

export default {
  name: 'App',
  components : {Header, MessagesSection, Sender},
  data(){
    return {
      text : "",
      socketConn : null
    }
  },
  methods : {
    sendBtnPressed : function(text){
      this.$refs.messageSection.sendMyMessage(text)
      this.socketConn.sendMessage(text)
    }
  },
  created() {
    let self = this
    this.socketConn = new MessageSocketConnection((msg)=>{
      self.$refs.messageSection.sendOthersMessage('',msg)
    })
  },
}
</script>

<style lang="scss">
@import './scss/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
