// console.log(Math.random() * 10)
// var page1 =document.getElementById("page1")

// function page() {
     
//     axios.get("https://swapi.dev/api/people/1/")
// .then(response => { console.log()
//     for(let i = 0; i < Object.keys(response.data).length; i++){
    
//         const div = document.createElement("div")
//         div.textContent = response.data.name
//         document.body.appendChild(div)   
        
//         const h1 = document.createElement("h1")
//         h1.textContent = Object.keys(response.data)[i]
//         div.appendChild(h1)   

//         /
              

//     }  
    
// }).catch(error => console.log(error))
// console.log(page1)
// }

// page1.addEventListener("click", page)


// get the todo's from database

function getData(){
    axios.get("https://api.vschool.io/[CrystalMullins]/todo/")
        .then(response => listData(response.data))  .catch(error => console.log(error))
}

// list the todo items to the DOM

function listData(data){
    for(let i = 0; i < data.length; i++){
        const section = document.createElement("section")
        section.id= data[i]._id
        document.getElementById("todo_list").appendChild(section)
        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        section.appendChild(h1)
        // h1.id = data[i].completed
        section.classList = data[i].completed
        const h2 = document.createElement("h2")
        h2.textContent = data[i].description
        section.appendChild(h2)
        const h3 = document.createElement("h3")
        h3.textContent = data[i].price
        section.appendChild(h3)
        if(data[i].completed){
            
            h1.innerHTML = `<strike>${
                data[i].title
            }</strike>`
            h2.innerHTML = `<strike>${
                data[i].description
            }</strike>`
            h3.innerHTML = `<strike>${
                data[i].price
            }</strike>`
        }
        const button = document.createElement("button")
        button.textContent = "delete"
        button.id = data[i]._id
        document.getElementById("todo_list").appendChild(button)
        button.addEventListener("click", (e) => {
            console.log(e.target)
            axios.delete("https://api.vschool.io/[CrystalMullins]/todo/" + e.target.id)
            .then(response => {

                document.getElementById(e.target.id).remove()

                const buttons = document.getElementsByTagName("button")
                // console.log(buttons)
                for(var i = 0; i < buttons.length; i++)
                {
                    if(buttons[i].id === e.target.id && buttons[i].textContent === "Update")
                    {
                        console.log(buttons[i])
                        buttons[i].remove()
                        e.target.remove()
                    }
                }
            })      
             .catch(error => console.log(error))
        
        })
        const button2 = document.createElement("button")
        button2.textContent = "Update"
        button2.id = data[i]._id
        document.getElementById("todo_list").appendChild(button2)
        button2.addEventListener("click", (e) => {
            
            var edits = section.children
            var inputs = document.getElementById("todoBox").children
            console.log(inputs)
            console.log(edits)

            if(inputs[1].value !== ""){edits[0].textContent = inputs[1].value}
            if(inputs[3].value !== ""){edits[1].textContent = inputs[3].value}
            if(inputs[5].value !== ""){edits[2].textContent = inputs[5].value}
            
          for (var i = 0; i < 6; i++) {if(inputs[i+2].value !== ""){ var updates =  {
                title:inputs[1].value,
                description:inputs[3].value,
                price:inputs[5].value
            }
            console.log(updates)
            axios.put("https://api.vschool.io/[CrystalMullins]/todo/" + e.target.id).inputs[0].value
            .then(response => {
                document.getElementById(e.target.id)               
            })      
             .catch(error => console.log(error))
          }}
        })
    
        
        
        section.addEventListener("click", (e) => {
            console.log(e.currentTarget)
        // console.log(document.getElementById(e.currentTarget.innerHTML))
        // const updates = {
        //     completed:
        //     Description:"have babies",
        // }
        axios.put("https://api.vschool.io/[CrystalMullins]/todo/" + e.currentTarget.id,{
            completed:(e.currentTarget.className === "true"? false: true)
            
        })
            .then(response => { 
                
                console.log(response.data)
            //    document.getElementById(response.data._id) === "true"?
            document.getElementById(response.data._id).classList = response.data.completed
            // var array = [];
            var updatedSection =document.getElementById(response.data._id)
            // array.push(updatedSection.children[0].textContent)
            console.log(updatedSection.children.length)
            for(let i =0; i < updatedSection.children.length; i++){ 
                response.data.completed? updatedSection.children[i].classList.add("strike"): updatedSection.children[i].classList.add("unstrike")

                !response.data.completed? updatedSection.children[i].classList.remove("strike"): updatedSection.children[i].classList.remove("unstrike")
               
            }
            
            //    document.getElementById(response.data._id.classList = ) = "true";
            
            }) 
                  .catch(error => console.log(error))
        })
    }
}
    // function clearList(){
    //     const el = section
    //     while(el.firstChild){
    //         el.removeChild(el.firstChild)
    //     }

    // }

getData()

// form for the post request
const todo_form = document["todo_form"]

todo_form.addEventListener("submit", function(e){
    e.preventDefault()
    const newTodo = {
        title: todo_form.title.value,
        description: todo_form.description.value,
        price: todo_form.price.value

}

    

    axios.post("https://api.vschool.io/[CrystalMullins]/todo/", newTodo)
         .then(response => {
         console.log(response.data)
             document.getElementById("todo_list").innerHTML =""
         
         getData()
         todo_form.reset()
        //  location.reload()
    })
         .catch(error => console.log(error))
         todo_form.title.value = ""
})

// const todoList = document.todoList

// todoList.addEventListener("submit", function(event){
//     event.preventDefault()
//     const newTodo = {
//         title: todoList.title.value,
//         description: todoList.description.value,
//         price: todoList.price.value
//     }
//     axios.post("https://api.vschool.io/[CrystalMullins]/todo/", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })



// // const newItem = {
// //     title: "Get Married to John Mayer",
// //     Description: "Seduce and Marry John Mayer",
// //     price: 500
    
// // }


//     const result = Object.assign(updates)
// console.log(result)


// // delete request with axios

// const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){

   
// })



//