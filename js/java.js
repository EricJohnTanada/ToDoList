add();
function add(){
  document.querySelector('form').addEventListener('submit',submit);
}

function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<input type="checkbox"></span><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

function add(){
  document.querySelector('form').addEventListener('submit',submit);

  document.getElementById('done').addEventListener('click',done);
}

  function done(e){

  let ul = document.querySelector('ul').innerHTML = '';
}

function add(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('done').addEventListener('click',done);

  document.querySelector('ul').addEventListener('click',erase);

}

function erase(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    deleteOne(e);
  }
}


function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}


function deleteOne(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "red";
  }
}