// axios.get("https://swapi.dev/api/people/1/")
// .then(response => {
//     const homeworldULR = response.data.homeworld
//     return axios.get(homeworldURL)
// })
// .then(response => {
//     return axios.get(response.data.residents[i])
// })
// .then(response =>{
//     console.log(response)
// })
// .catch(error => console.log(error))








// var luke = document.createElementById("luke")
// document.body.append( luke)



// function luke(){
//     // console.log(page2)
// axios.get("https://swapi.dev/api/people/1")
// .then(response => { console.log()
//     for(let i = 0; i < Object.keys(response.data).length; i++){
    
        
//             const div = document.createElement("div")
//             div.textContent = response.data.name
//             document.body.appendChild(div)   
            
//             const h1 = document.createElement("h1")
//             h1.textContent = Object.keys(response.data)[i]
//             div.appendChild(h1)   
            
    
// } 
//         console.log(response.data)
//   }).catch(error => console.log(error))}
// //   var page2 =document.getElementById("page2")

// //   page2.addEventListener("click", pokemon)
// Helper function that will get data from a given URL parameter
// and passes the data to a callback function so the programmer
// can do whatever they want with that data
// function getData(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             return callback(data)
//         }
//     }

//     xhr.open("GET", url, true)
//     xhr.send()
// }

// Use our helper function to get the Luke Skywalker resource from the API


// Because our helper function returned the promise from fetch, we can use .then() to do stuff
// // instead of having to use nested callbacks. We can also chain together the promises to keep




// works
// // them from nesting down into a "pyramid of doom."
async function getData() {

    try{
        const response = await axios.get("https://swapi.dev/api/people/1")
        const homeworld = await axios.get(response.data.homeworld)
        home(homeworld, response)
        console.log(homeworld)

        const lukeData = await axios.get("https://swapi.dev/api/people/1")
    console.log(lukeData.data)
    const lukeFilmUrls = lukeData.data.films
    const movieList = []

    for(let i = 0; i < lukeFilmUrls.length; i++){
        movieList.push(axios.get(lukeFilmUrls[i]))
        

        var movieLists = document.createElement("movieList")
        movieLists.textContent = lukeFilmUrls[i]
        document.body.appendChild(movieLists)
        Promise.all(lukeFilmUrls)

        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    }
    catch(error){
        console.log(error)
    }


    console.log(movieLists)
}
getData()


function home(homeworld, luke){

    const h2 = document.createElement("h2")
    h2.textContent = luke.data.name
    document.body.appendChild(h2)

    const h1 = document.createElement("h1")
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    
}
   

async function getAllLukeMovies(){
    
}

getAllLukeMovies()



// .then(response => console.log(response[1].data.title))
    // .then(response => console.log(response[2].data.title))
    // .then(response => console.log(response[3].data.title))