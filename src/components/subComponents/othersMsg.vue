<template>
    <div id="other-container">
        <p id="sender-text">
        {{sender}}
        </p>    
        <div id="others-msg-box" class = "msg-box">
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    props : ['text', 'sender']
}
</script>

<style lang="scss">
@import 'msgBox.css';
#other-container {
    margin : 10px;
}

#others-msg-box {
    display : flex;
    flex-direction : row;
    justify-content : flex-start; 
}
#sender-text {
    font-size : 13px;
    margin : 0px;
    color : white;
    font-weight : bold;
    margin-left : 5px;
}
</style>