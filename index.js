let listOfTask = JSON.parse(localStorage.getItem('todoList')) || []

console.log(listOfTask);


const displayList = () =>{
  document.getElementById('screen').innerHTML = ''
    listOfTask.forEach((element, index) => {
        document.getElementById('screen').innerHTML += `
        <div class="inner-aspect p-2 rounded-2 mb-2">
                    <h4>${element.task}</h4> 
                    <h6 class="py-2">${element.desc}</h6> 
                    <button class="btn btn-success" type="submit" id="done" onclick="markAsDone(${index})">${element.status?'DONE':'<i class="fa-solid fa-check"></i>'}</button>
                    <button class="btn btn-danger" type="submit" onclick="clearList()"><i class="fa-solid fa-trash"></i></button>
                    <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="prepareEdit(${index})"" type="submit">Edit</button>
        </div>`
    });
}

const prepareEdit = (index) => {
  document.getElementById('editedTask').value = listOfTask[index].task;
  document.getElementById('editedDescription').value = listOfTask[index].desc;

  // Attach the index to the save-edit button's onclick event
  document.getElementById('save-edit').onclick = function () {
      editTask(index);
  };
};

const toDoList = () =>{
    let nameOfTask = document.getElementById('nameOfTask').value
    let description = document.getElementById('description').value
    // console.log(nameOfTask);
    // console.log(description);

    listOfTask.push({'task': nameOfTask, 'desc': description, status:false})
    // console.log(listOfTask);

    //setting items to a local storage and convert to string
    localStorage.setItem('todoList', JSON.stringify(listOfTask))
    document.getElementById('screen').innerHTML = ''
    // listOfTask.push(description)
    displayList()
}

const clearList = (index) =>{
    // Remove the task from the list based on it index
    listOfTask.splice(index, 1)

    //delete from local storage
    localStorage.setItem('todoList', JSON.stringify(listOfTask))
    
    alert('Task Deleted!!!')
    
    // console.log(listOfTask);
    
    displayList()
}

const markAsDone =(index) =>{
 
  listOfTask[index].status =  !listOfTask[index].status
  

  localStorage.setItem('todoList', JSON.stringify(listOfTask));
  alert("Task Completed");
  // listOfTask[index].status = true;
    console.log(listOfTask);
}

const editTask = (index) =>{
  let editedTask = document.getElementById('editedTask').value;
  let editedDescription = document.getElementById('editedDescription').value;
  listOfTask[index] = { 'task': editedTask, 'desc': editedDescription };
    localStorage.setItem('todoList', JSON.stringify(listOfTask));

    displayList();
}