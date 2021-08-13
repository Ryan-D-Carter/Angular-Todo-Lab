import { Component } from '@angular/core';
import { Todo } from './todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoLab';

  Todos: Todo[] = [
    {
      task: 'Fold clothes',
      completed: false
    },
    {
      task: 'put clothes in dresser',
      completed: false
    },
    {
      task: 'relax',
      completed: false
    },
    {
      task: 'try to pet cat',
      completed: true
    },
    {
      task: 'be awesome',
      completed: false
    },
  ];


  addTask(form:NgForm){
    let newTask:string = form.form.value.task;
    this.Todos.push({task:newTask, completed:false});
    console.log()
  }

  removeTask(todo:Todo){
    const index = this.Todos.indexOf(todo);
    this.Todos.splice(index, 1);
  }

  completeTask(todo:Todo) {
    todo.completed = true;
  }
}
