<template>
    <div class = "flex row" id="sender-container">
        <div id="input-container" class = "scretch">
            <input type="text" class="form-control" id="usr" v-model="text">
        </div>
        <div id="button-container">
            <button type="button" class="btn btn-warning" v-on:click="onSendPress">Send <font-awesome-icon icon="angle-right"/></button>      
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        onSendPress : function(){
            this.$emit('sendBtnHandler', this.text)
            this.text = ""
        }
    },
    data(){
        return {
            text : ''
        }
    }
}
</script>

<style lang="">
#input-container {
    
}
#sender-container {
    margin : 5px;
    margin-bottom : 15px;
}
#button-container{
    width : 85px;
    padding-left : 5px;
}

</style>