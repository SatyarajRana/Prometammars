window.addEventListener('load',function(){
  const form = document.querySelector("#form");
  const input = document.querySelector('#new_task_input');
  const list = document.querySelector('#list');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    if (!input) {
      alert("Please fill the field");
    }

    const task_value = input.value;

    input.value = "";

    const tasks_div = document.createElement("div");
    tasks_div.classList.add("tasks");

    const task_div = document.createElement("div");
    task_div.classList.add("task");

    const task_content = document.createElement("div");
    task_content.classList.add("content");

    tasks_div.appendChild(task_div);
    task_div.appendChild(task_content);


    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.setAttribute("readonly","readonly");
    task_input.type = "text";
    task_input.value = task_value;

    list.appendChild(task_div);


    task_content.appendChild(task_input);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    task_div.appendChild(actions);

    const edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerHTML = "Edit";

    actions.appendChild(edit_button);

    const delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerHTML = "Delete";


      actions.appendChild(delete_button);



    edit_button.addEventListener('click', function(){
      if (edit_button.innerHTML == "Edit") {
        task_input.removeAttribute("readonly");
        edit_button.innerHTML = "Save";
        task_input.focus();
      }else {
        task_input.setAttribute("readonly","readonly");
        edit_button.innerHTML = "Edit";
      }
    })

    delete_button.addEventListener('click', function(){
      list.removeChild(task_div);
    })
  })
})
