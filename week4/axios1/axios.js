// console.log(axios)

// get requests with axios(array)


// get All

axios.get("https://api.vschool.io/CrystalMullins/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const div = document.createElement("div")
        // div.textContent = response.data[i].title
        document.body.appendChild(div)   
        const img = document.createElement("img")
        img.src = response.data[i].imgUrl
        div.appendChild(img)  

        const h1 = document.createElement("h1")
        h1.textContent = response.data[i].title
        div.appendChild(h1)   

        const h2 = document.createElement("h2")
        h2.textContent = response.data[i].description
        document.body.appendChild(h2)  

        const h3 = document.createElement("h3")
        h3.textContent = response.data[i].price
        document.body.appendChild(h3) 
         
        const h4 = document.createElement("h4")
        h4.textContent = response.data[i].completed
        document.body.appendChild(h4)  
              

    }  
    console.log(response)
})
.catch(error => console.log(error))




// get one

// get object