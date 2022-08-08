// 20220808 Promise 測試
function testFunction(num, time = 4000){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if (num%2 ==0 ){
                resolve(`${num}, 成功`)
            }else{
                reject("Failed")
            }            
        },time)
    });
}

// testFunction(n).then(response =>{
//     console.log(response)
//     return response
// })


// for (let i = 0; i < 10; i++){
//     let n = Math.floor(Math.random()*11)
//     testFunction(n).then(response =>{
//         console.log(response)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }

import axios from "axios"
let data = {}

console.log('開始');

axios.get('https://randomuser.me/api/').then(function(response) {
    data = response;
  });

console.log("Data: ",data);