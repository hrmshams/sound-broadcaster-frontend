<template>
    <div id="my-container">
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
#my-container {
    margin : 10px;
    display : flex;
    flex-direction : row;
    justify-content : flex-end; 
}

#msg-box {
    border: 2px solid white;
    border-radius:3px;
    padding : 10px;
    background-color : blue;
    width : 400px;

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