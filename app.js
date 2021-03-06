// Task 3//
function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let description = document.forms ["myForm"]["description"].value;
    let assignedto = document.forms ["myForm"]["assignedto"].value;
    let duedate = document.forms ["myForm"]["duedate"].value;
    let status = document.forms ["myForm"]["status"].value;
    if ((name == "") || (name.length>20)) {
      alert("Name must be filled out");
      return false;
    } else if ((description=="")|| (description.length>20)) {
      alert("Enter valid description");
      return false;
    } else if ((assignedto=="")|| (assignedto.length>20)) {
        alert("Enter valid Assigned to");
        return false;
    }  else if (duedate=="") {
        alert("Select valid due date");
        return false;
    } else if (status=="") {
        alert("Select valid status");
        return false;
    } return true
}
datepicker.min = new Date().toISOString().split("T")[0];

//Task 4 part 2 

class TaskManager {
    constructor() {
        this.tasks = []
        this.nextTaskID = 1
       
    }
    getTasks() {
        return this.tasks
    }
    addTask(task) {
        this.tasks.push(task);
        this.updateLocalStorage()
    }
    updateLocalStorage(){
        localStorage.setItem('tasks' , JSON.stringify(this.tasks));
        location.reload()
    }
    loadFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        if (tasks) {
            this.tasks = tasks
        }
        for (let x in this.tasks) {
            display()
        }
    }
    
    
    deleteTask() {
        // return this.tasks
        let event = window.event.target
        let taskID = event.parentNode.parentNode.parentNode.attributes.id.value

        console.log(taskID)
        console.log(this.tasks.ID)
       
            
            let x = 0
            while (x<2) {
                let deletedTask = document.getElementById(taskID)
                deletedTask.remove()
                x++
                
            }
        for (x in this.tasks){
            console.log(this.tasks[x].ID)
            
            if (this.tasks[x].ID==taskID){
            this.tasks.splice(x,1)
            console.log(this.tasks)
        } else {
            console.log("taskNotPresent")
        }
        
        }
        this.updateLocalStorage()
        
         


        console.log("itworkssss")
    }
    updateTask() {
        let updatedTask = {}
        let event = window.event.target
        let taskID = event.parentNode.parentNode.parentNode.attributes.id.value
        for (i=0; i<this.tasks.length;i++) {
            if (this.tasks[i].ID==taskID){
                updatedTask = this.tasks[i]
            }
        }
        document.querySelector("#name").value=updatedTask.Name
        document.querySelector("#description").value=updatedTask.Description
        document.querySelector("#assignedto").value=updatedTask.AssignedTo
        document.querySelector("#datepicker").value=updatedTask.DueDate
        document.querySelector("#status").value=updatedTask.Status
        console.log(updatedTask)

        document.querySelector("#addTask").outerHTML= `<button type="button" class="btn btn-primary" id="saveTask">Save Item</button>`

        document.querySelector("#saveTask").addEventListener("click", function(){
            console.log("clickkk")
            let name = document.querySelector("#name").value
            let description = document.querySelector("#description").value;
            let assignedTo = document.querySelector("#assignedto").value;
            let dueDate = document.querySelector("#datepicker").value;
            let status = document.querySelector("#status").value;
            if (validateForm()==true){
                updatedTask.Name=name
                updatedTask.Description=description
                updatedTask.AssignedTo = assignedTo
                updatedTask.DueDate=dueDate
                updatedTask.Status=status

                tm.updateLocalStorage()
                display()
         }
} )
    }}

let tm = new TaskManager();
tm.loadFromLocalStorage()




//Task 4 Part 1
        
document.querySelector("#addTask").addEventListener("click", function(){
    if (validateForm()==true){
        // let id = tm.tasks.length + 1
        let assignedBy = document.querySelector("#name").value;
        let description = document.querySelector("#description").value;
        let assignedTo = document.querySelector("#assignedto").value;
        let dueDate = document.querySelector("#datepicker").value;
        let status = document.querySelector("#status").value;

        let newTask = createTask( assignedBy, description, assignedTo, dueDate, status)
        tm.addTask(newTask)
        console.log('current tasks:', tm.getTasks())

        
        display()

    }
  

})

// document.querySelector("#delete").addEventListener("click", function(){
//     let deletedCard = document.getElementById("delete")
//     deletedCard.innerHTML = ""
// })


function createTask( assignedBy, description, assignedTo, dueDate, status){
    let id = 0
    if (tm.tasks.length == 0) {
        id = 1
    }
    else {
        let lastID = tm.tasks[tm.tasks.length-1].ID
        id = lastID + 1
    }
    let newTask = {
        "ID": id,
        "Name": assignedBy,
        "Description": description,
        "AssignedTo": assignedTo,
        "DueDate": dueDate,
        "Status": status,
    }
    // taskList.push(newTask)
    // localStorage.setItem("allTaskList", JSON.stringify(taskList))
    
    // console.log(taskList)
    return newTask;
}

console.log("This is the script running")
function display(){
    console.log("display function running")

    //This is the card//
    let card = document.querySelector("#taskout")
    card.innerHTML =  ""
    
    for (i in tm.tasks){
        let taskHTML = `<div class="card" style="width: 18rem;" id="${tm.tasks[i]["ID"]}">
        <div class="card-header" style="color: black;">
            Task ${tm.tasks[i]["ID"]}
        </div>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Assigned to:</h5>
                    <small>3 days ago</small>
                </div>
                <p class="mb-1"></p>
                <small>${tm.tasks[i]["AssignedTo"]}</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Assigned By:</h5>
                    <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1"></p>
                <small class="text-muted">${tm.tasks[i]["Name"]}</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Due Date</h5>
                    <small class="text-muted">3 days ago</small>
                </div>
                <p class="mb-1"></p>
                <small class="text-muted">${tm.tasks[i]["DueDate"]}</small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Status:</h5>
                    <small class="text-muted">${tm.tasks[i]["Status"]}</small>
                </div>
                <p class="mb-1"></p>
                <small class="text-muted"></small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Description:</h5>
                    <small class="text-muted">${tm.tasks[i]["Description"]}</small>
                </div>
                <p class="mb-1"></p>
                <small class="text-muted"></small>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <button type="button" class="btn btn-dark" id="delete" onclick="tm.deleteTask()">
                    <span class="btn-label"><i class="fa fa-trash"></i></span>Delete
                </button>
                <button type="button" class="btn btn-success" id="update" onclick="tm.updateTask()">
                    <span class="btn-label"><i class="fa fa-edit"></i></span>Update
                </button>
            </a>
        </div>
    </div>`
    card.innerHTML += taskHTML
    
    
    // This is summary //
    let summary = document.querySelector("#taskSummaryOut")
    summary.innerHTML =  ""
    
    for (i in tm.tasks){
        let summaryHTML = ` <a href="#" class="list-group-item list-group-item-action " id="${tm.tasks[i]["ID"]}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1"><strong>Task for: </strong>${tm.tasks[i]["AssignedTo"]}</h5>
          <small><strong>Due: </strong>${tm.tasks[i]["DueDate"]}</small>
        </div>
        <p class="mb-1"><strong>Status: </strong>${tm.tasks[i]["Status"]}</p>
        <small></small>
      </a>`
      summary.innerHTML += summaryHTML
        }
    }
    
} 
    
// taskList = []
    
