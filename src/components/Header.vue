<template>
    <div class = "flex row" id= "header">
        {{header}}
    </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Sound Broadcaster'
    }
  }
}
</script>

<style scoped>
#header {
    height : 50px;
    justify-content : center;
    align-items : center;
    color : white;
    font-size : 20px;
    font-weight : bold;
    background-color : #00e389
}
</style>