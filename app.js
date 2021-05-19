
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

    }
    getTasks() {
        return this.tasks
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask() {
        // return this.tasks
        let event = window.event.target
        let taskID = event.parentNode.parentNode.parentNode.parentNode.attributes.id.value

        console.log(taskID)
        console.log(this.tasks.ID)
        let deletedTask = document.getElementById(taskID)
        deletedTask.remove()

        for (x in this.tasks){
            console.log(this.tasks[x].ID)
        }
        
        

        

        console.log("itworkssss")
    }
    updateTaskStatus() {
        return this.tasks
    }
}

let tm = new TaskManager();




//Task 4 Part 1
        
document.querySelector("#addTask").addEventListener("click", function(){
    if (validateForm()==true){
        let id = tm.tasks.length + 1
        let assignedBy = document.querySelector("#name").value;
        let description = document.querySelector("#description").value;
        let assignedTo = document.querySelector("#assignedto").value;
        let dueDate = document.querySelector("#datepicker").value;
        let status = document.querySelector("#status").value;

        let newTask = createTask(id, assignedBy, description, assignedTo, dueDate, status)
        tm.addTask(newTask)
        console.log('current tasks:', tm.getTasks())

        
        display()

    }
  

})

// document.querySelector("#delete").addEventListener("click", function(){
//     let deletedCard = document.getElementById("delete")
//     deletedCard.innerHTML = ""
// })


function createTask(id, assignedBy, description, assignedTo, dueDate, status){
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
    let fara = document.querySelector("#taskout")
    fara.innerHTML =  ""
    
    for (i in tm.tasks){
        let taskHTML = 
    `<div class="col-10 col-md-6 col-lg-3" id="${tm.tasks[i]["ID"]}">


        <div class="card"  style="width: 18rem;">
            <div class="card-header">
                Task ${tm.tasks[i]["ID"]}
            </div>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active">
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
                                <button type="button" class="btn btn-primary" id="delete" onclick="tm.deleteTask()">
                                    <span class="btn-label"><i class="fa fa-trash"></i></span> Delete
                                </button>
                                <button type="button" class="btn btn-primary" id="update">
                                    <span class="btn-label"><i class="fa fa-edit"></i></span> Update
                                </button>
                </a>
            </div>
        </div>
    </div>`
    fara.innerHTML += taskHTML
    }
} 
    
// taskList = []
    
