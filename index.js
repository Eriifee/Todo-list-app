let items = JSON.parse(localStorage.getItem("todo-list")) || []
let textInputEl = document.getElementById("textInput")
const todoList = document.getElementById("todo-list")
const taskBtn = document.getElementById("add-task")


// function renderTodo(){
//   const listItem = document.createElement("li")
//   listItem.classList.add("list-item")
//   const checkbox =document.createElement("input")
//   checkbox.type = "checkbox"
//   const deleteIcon = document.createElement("i")
//  deleteIcon.className = "fa-solid fa-trash-can delete-icon"
//  const textInputElValue = textInputEl.value
//   listItem.appendChild(checkbox)
//   listItem.appendChild(textInputElValue)
//   listItem.appendChild(deleteIcon)
// }

// taskBtn.addEventListener("click", function(){
// })




function add(){

    if (textInputEl.value){
          
           let item = textInputEl.value
           const listItem = document.createElement("li")
            listItem.classList.add("list-item")
           const label = document.createElement("label")
           const checkbox = document.createElement("input")
             checkbox.type = "checkbox"
           const textNode = document.createElement("span")
                  textNode.textContent = item
           const deleteIcon = document.createElement("i")
                 deleteIcon.className = "fa-solid fa-trash-can delete-icon" 
 
                
             
           listItem.appendChild(label)      
           listItem.appendChild(checkbox)
           listItem.appendChild(textNode)
           listItem.appendChild(deleteIcon)

           todoList.appendChild(listItem)
           textInputEl.value = ""
           
           checkbox.addEventListener("change", function(){
            
           
            if(checkbox.checked){
                textNode.classList.add("strike-through")
            } else {
              textNode.classList.remove("strike-through")
            }
           })
        
         
           
           deleteIcon.addEventListener("click", function(){
            todoList.removeChild(listItem)
         }) 
    
    }


}
