
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
        const h1 = document.createElement("h1")
        h1.textContent = data[i].title
        document.getElementById("todo_list").appendChild(h1)
        h1.id = data[i].completed
        h1.classList = data[i]._id
        const h2 = document.createElement("h2")
        h2.textContent = data[i].description
        document.getElementById("todo_list").appendChild(h2)
        const h3 = document.createElement("h3")
        h3.textContent = data[i].price
        document.getElementById("todo_list").appendChild(h3)
        if(data[i].completed){
            h1.innerHTML = `<strike>${
                data[i].title
            }</strike>`
        }
        const button = document.createElement("button")
        button.textContent = "delete"
        button.id = data[i]._id
        document.getElementById("todo_list").appendChild(button)
        button.addEventListener("click", (e) => {
            console.log(e.target)
            axios.delete("https://api.vschool.io/[CrystalMullins]/todo/" + e.target.id)
            .then(response => console.log(response.data))       .catch(error => console.log(error))
        
        })
        
        h1.addEventListener("click", (e) => {
            console.log(e.currentTarget)
       
        // const updates = {
        //     completed:
        //     Description:"have babies",
        // }
        axios.put("https://api.vschool.io/[CrystalMullins]/todo/" + e.currentTarget.classList,{
            completed:(e.currentTarget.id === "true"? false: true)
        })
            .then(response => console.log(response.data))       .catch(error => console.log(error))
        })
    }
    }
    // function clearList(){
    //     const el = document.getElementById("todo_list")
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
         getData()
         location.reload()})
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