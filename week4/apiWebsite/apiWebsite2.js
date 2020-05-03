function pokemon(){
    console.log(page2)
axios.get("https://pokeapi.co/api/v2/pokemon/1/")
.then(response => { console.log()
    for(let i = 0; i < Object.keys(response.data).length; i++){
    
        
            const div = document.createElement("div")
            div.textContent = response.data.name
            document.body.appendChild(div)   
            
            const h1 = document.createElement("h1")
            h1.textContent = Object.keys(response.data)[i]
            div.appendChild(h1)   
            // for(let i = 0; i < response.data.abilities.length; i++){
            // const h2 = document.createElement("h2")
            // h2.textContent = Object.keys(response.data)[i]
            // document.body.appendChild(h2)  
    
            // const h3 = document.createElement("h3")
            // h3.textContent = response.data.abilities[i].slot
            // document.body.appendChild(h3)  
    
            // const h4 = document.createElement("h4")
            // h4.textContent = response.data.forms
            // document.body.appendChild(h4)  
                  
    
} 
        console.log(response.data.abilities[0].ability.name)
  }).catch(error => console.log(error))}
  var page2 =document.getElementById("page2")

  page2.addEventListener("click", pokemon)
