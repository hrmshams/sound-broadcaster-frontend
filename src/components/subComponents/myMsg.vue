<template>
    <div id="my-container">
        <div class="msg-box" id ="my-msg-box">
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
#my-container {
    margin : 10px;
    display : flex;
    flex-direction : row;
    justify-content : flex-end; 
}

#my-msg-box {
}
#sender-text {
    font-size : 13px;
    margin : 0px;
    color : white;
    font-weight : bold;
    margin-left : 5px;
}
</style>