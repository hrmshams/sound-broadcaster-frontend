<template>
    <div class = "flex column" id= "header">
        <div class= "row">
        <font-awesome-icon icon="bullhorn" />
        &nbsp{{header}}
        </div>

        <button type="button" class="btn mt-2" :class="classname" v-on:click="onAirBtnPress"> 
          <font-awesome-icon :icon="icon" />
          <span>{{airText}}</span>
        </button>
    </div>
</template>

<script>
const data = {
  airTexts : [
    'press to get on the air',
    "you're on the air, Talk!"
  ],
  icon : [
    'microphone-alt',
    'microphone-alt-slash',
  ],
  classname : [
    'btn-danger',
    'btn-warning',
  ]
}
export default {
  data () {
    return {
      header: 'Sound Broadcaster',
      airStateIndex : 0,
      airText : data.airTexts[0],
      icon : data.icon[0],
      classname : data.classname[0]
    }
  },
  methods: {
    onAirBtnPress : function(){
      this.airStateIndex = (this.airStateIndex+1) % 2
      this.airText = data.airTexts[this.airStateIndex]
      this.icon = data.icon[this.airStateIndex]
      this.classname = data.classname[this.airStateIndex]
    }
  },
}
</script>

<style scoped>
#header {
    height : 100px;
    justify-content : center;
    align-items : center;
    color : white;
    font-size : 20px;
    font-weight : bold;
    background-color : #00e389
}
</style>