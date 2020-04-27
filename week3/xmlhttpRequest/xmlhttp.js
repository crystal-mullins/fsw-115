
const xhr = new XMLHttpRequest()

// xhr.readyState

// xhr.status

xhr.open("GET","https://api.vschool.io/pokemon ", true)
xhr.send()


xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        showData(data.objects[0])
    } else if (xhr.readyState === 4 && xhr.status !== 200 ){
        console.log(xhr.responceText)
    }
}

function showData(data){
    for(let i = 0; i < data.pokemon.length; i++){
    const h1 = document.createElement("h1")
    h1.textContent = data.pokemon[i].name
    document.body.appendChild(h1)
    const h2 = document.createElement("h2")
    h2.textContent = data.pokemon[i].resource_uri
    document.body.appendChild(h2)
    h1.style.textAlign = "center"
h1.style.fontSize = "40px"
h1.style.color = "green"

h2.style.textAlign = "center"
h2.style.fontSize = "30px"
h2.style.color = "purple"

    }
    
}


