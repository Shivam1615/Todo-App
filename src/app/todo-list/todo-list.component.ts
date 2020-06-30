import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';  
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  newTodos: Todo = new Todo();
  editing: boolean = false;
  editingTodos: Todo = new Todo()

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void{
    this.todoService.getTodos()
    .then(todos => this.todos = todos );    
  }

  createTodo(todoForm: NgForm): void{
    this.todoService.createTodos(this.newTodos)
      .then(createTodo => {
        todoForm.reset();
        this.newTodos = new Todo()
        this.todos.unshift(createTodo)
      });
  }

  deleteTodo(id: string): void{
    this.todoService.deleteTodos(id)
      .then(() => {
        this.todos = this.todos.filter(todo => todo.id != id);
      });
  }

  updateTodo(Tododata: Todo): void{
    console.log(Tododata);
    this.todoService.updateTodos(Tododata)
      .then(updateTodo => {
        let existingTodo = this.todos.find(todo => todo.id === updateTodo.id);
        Object.assign(existingTodo, updateTodo);
        this.clearEditing();
      });
  }

  toggleCompleted(Tododata: Todo): void{
    Tododata.completed = !Tododata.completed;
    this.todoService.updateTodos(Tododata)
      .then(updateTodo => {
        let existingTodo = this.todos.find(todo => todo.id === updateTodo.id);
        Object.assign(existingTodo, updateTodo);
      });
  }

  EditTodo(Tododata: Todo): void {
    this.editing = true;
    Object.assign(this.editingTodos, Tododata);
  }

  clearEditing(): void{
    this.editingTodos = new Todo();
    this.editing = false;
  }
}
