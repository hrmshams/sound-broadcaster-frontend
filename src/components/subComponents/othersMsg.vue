<template>
    <div id="other-container">
        <p id="sender-text">
        {{sender}}
        </p>    
        <div id="msg-box">
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    props : ['text', 'sender']
}
</script>

<style lang="">
#other-container {
    margin : 10px;
}

#msg-box {
    border: 2px solid white;
    border-radius:3px;
    padding : 10px;
    background-color : white;
    width : 400px;

    display : flex;
    flex-direction : row;
    justify-content : flex-start; 

    word-wrap: break-word;

}
#sender-text {
    font-size : 13px;
    margin : 0px;
    color : white;
    font-weight : bold;
    margin-left : 5px;
}
</style>