// 3 states of promises
// 1 pending
// 2 resolved   .then()
// 3 rejected   .catch()

// resolve  - then
// reject -catch 

// when a function returns a promise it is a thenable

// function flipCoin(){
//     return new Promise((resolve, reject) => {
//         const randomNum = Math.floor(Math.random() * 2)

//         if(randomNum === 0){
//             resolve("HEADS")
        
//         } else if(randomNum === 1){
//             reject("TAILS")
//         }
//     })

// }

// flipCoin()
//     .then(response => console.log(response))
//     .catch(error => comsole.log(error))

// 

fetch("https://rickandmortyapi.com/api/character")

    .then(res => res.json())
    .then(res => {

    for(let i = 0; i < res.results.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = res.results[i].name
        document.body.appendChild(h1)
    }
})
.catch(err => console.log(err))