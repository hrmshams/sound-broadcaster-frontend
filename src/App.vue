<template>
  <div id="app">
    
    <div class = "container flex column fullSize">
      <Header></Header>
      <MessagesSection></MessagesSection>
      <Sender></Sender>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import MessagesSection from './components/MessagesSection'
import Sender from './components/Sender'
export default {
  name: 'App',
  components : {Header, MessagesSection, Sender}
}
</script>

<style lang="scss">
@import './scss/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
