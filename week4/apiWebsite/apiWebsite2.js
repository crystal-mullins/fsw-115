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
            
} 
        console.log(response.data.abilities[0].ability.name)
  }).catch(error => console.log(error))}
  var page2 =document.getElementById("page2")

  page2.addEventListener("click", pokemon)
