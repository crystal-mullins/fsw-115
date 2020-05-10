
// function starWars(){

var page1 =document.getElementById("page1")

function page() {
     
    axios.get("https://swapi.dev/api/people/1/")
.then(response => { console.log()
    for(let i = 0; i < Object.keys(response.data).length; i++){
    
        const div = document.createElement("div")
        div.textContent = response.data.name
        document.body.appendChild(div)   
        
        const h1 = document.createElement("h1")
        h1.textContent = Object.keys(response.data)[i]
        div.appendChild(h1)   

        /
              

    }  
    
}).catch(error => console.log(error))
console.log(page1)
}

page1.addEventListener("click", page)


// / const h2 = document.createElement("h2")
        // h2.textContent = Object.keys(response.data)[i]
        // document.body.appendChild(h2)  

        // const h3 = document.createElement("h3")
        // h3.textContent = response.data.eye_color
        // document.body.appendChild(h3)  

        // const h4 = document.createElement("h4")
        // h4.textContent = response.data.gender
        // document.body.appendChild(h4)  

