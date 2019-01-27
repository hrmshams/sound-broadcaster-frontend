import axios from 'axios'
axios.defaults.port = 3300;

const baseUrl = "http://localhost:3300/" 
const routes = {
}

export function getIndex(){
    axios({
        method : 'GET',
        url : baseUrl,
        headers: {'Content-Type': undefined},
        crossDomain:true,
    }).then(function(res){
        console.log(res)
    }).catch(function(err){
        console.log('err : ' + JSON.stringify(err.response))
    })
}