//Delete a task
var ele = document.getElementsByClassName("far fa-trash-alt");

var myFunction = function() {
    var z = this.parentNode.style.display = "none";
    console.log(z);
};

for (var i = 0; i < ele.length; i++) {
    ele[i].addEventListener('click', myFunction, false);
}

//clear btn
var taskList = document.querySelector(".list-group");
document.querySelector(".clear-button").addEventListener("click", clearTask);

function clearTask(){
    // taskList.innerHTML="";
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Add a task

// // Create a new list item when clicking on the "Add" button
document.querySelector(".add-task-button").addEventListener("click", newElement)
function newElement() {
    var li = document.createElement("li");
    li.className ="list-group-item";

    var inputValue = document.querySelector(".MyInput");
    li.appendChild(document.createTextNode(inputValue.value));
    console.log(li);

    if(inputValue.value === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".list-group ").appendChild(li);
      };

    const i = document.createElement('i');
    i.className ="far fa-trash-alt";
    li.appendChild(i);
   
    inputValue.value = '';
    //   e.preventDefault();
    
}