<template>
    <div v-if="type==='me'">
        <myMsg :text="text"></myMsg>
    </div>
    <div v-else-if="type==='others'">
        <othersMsg :text="text" :sender="sender"></othersMsg>
    </div>
</template>

<script>
import othersMsg from './subComponents/othersMsg'
import myMsg from './subComponents/myMsg'
export default {
    components : {
        othersMsg,
        myMsg
    },
    props:['type', 'sender', 'text'],
    data(){
        return{
            types : {
                me : 'me',
                others : 'others'
            }
        }
    }    
}
</script>


<style>    
</style>