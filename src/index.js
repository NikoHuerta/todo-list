import './styles.css';

import { Todo, TodoList, crearTodoHtml } from './classes';

export const todoList = new TodoList();

console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));
// todoList.todos.forEach( crearTodoHtml ); //FUNCIONA SIEMPRE Y CUANDO SEA 1 ARGUMENTO, ES LO MISMO DE ARRIBA.



// const newTodo = new Todo('Aprender JS!');
// todoList.nuevoTodo(newTodo);


// todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);
