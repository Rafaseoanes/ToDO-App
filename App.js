
let taskContainer = document.querySelector('#taskContainer')
let form = document.querySelector('#form')
let textInput = document.querySelector('#textInput')
let btn = document.querySelector('#btn')

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

btn.addEventListener('click', (event) => {

    event.preventDefault()
  
    let newTask = document.createElement('H5')
    newTask.innerText = textInput.value
    let deleteBtn = document.createElement('BUTTON')
    deleteBtn.innerText = ' Remove '
    deleteBtn.classList.add("eliminateBTN")
    newTask.innerText = textInput.value
    newTask.appendChild(deleteBtn)
    taskContainer.appendChild(newTask)
    textInput.value = ''
})

taskContainer.addEventListener('click', (e) => {
   
if( e.target.nodeName === 'H5'){
    strikeThrough(e.target)
  
}
})
function strikeThrough(element) {
    element.style.setProperty('text-decoration', 'line-through');
}
taskContainer.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      e.target.parentNode.remove();
    }
  });