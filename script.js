var listElement = document.querySelector('ul#tarefas');
var inputElement = document.querySelector('input#tarefa');
var buttonElement = document.querySelector('input#botao');
var article = document.getElementById('principal');


var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
var listArquivos = JSON.parse(localStorage.getItem('list_arquivos')) || [];
var mode = localStorage.getItem("Mode")
inputElement.addEventListener('keypress', function(event) {
    if (event.which == 13) {
        addTodo();
    };
});

function renderTodos() {
    listElement.innerHTML = '';
    for(todo of todos) {
        var todoElement = document.createElement('li');
        
        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', todo)
        var labelElement = document.createElement('label');
        labelElement.innerHTML = todo;
        labelElement.setAttribute('for', todo);
        todoElement.appendChild(checkbox);
        todoElement.appendChild(labelElement);


        var linkElement = document.createElement('a');
        
        var pos = todos.indexOf(todo);
       
     todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
        saveToStorage();
        };
    };

function addTodo() {
    var todoTexto = String(inputElement.value);
    todoTexto = todoTexto.replace('[', `<strong>`);
    todoTexto = todoTexto.replace(']', `</strong>`);
    todoTexto = todoTexto.replace('{', '<em>');
    todoTexto = todoTexto.replace('}', '</em>');
    todos.push(todoTexto);
    inputElement.value = '';
    renderTodos();
};

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
};

