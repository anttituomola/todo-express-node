const addTodo = (inputValue) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  var raw = JSON.stringify({
    "text": inputValue
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/todo", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      displayTodos(result)
    })

    .catch(error => console.log('error', error))

}

const displayTodos = (todos) => {
  const displayArea = document.getElementById("displayArea")
  displayArea.innerHTML = ""
  todos.map(todo => {
    const todoItem = document.createElement("div")
    todoItem.innerHTML = `<div class="todoItem">
    <p>${todo.text}</p> 
    </div>`
    displayArea.appendChild(todoItem)
  })
}


document.getElementById("button").addEventListener("click", () => {
  addTodo(document.getElementById("inputField").value)
  document.getElementById("inputField").value = ""
})