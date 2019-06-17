import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done:boolean,
    public targetedDate: Date
  )
  {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  // [
  //   new Todo(1,'learn to dance',false,new Date()),
  //   new Todo(2,'learn to ride bike',false,new Date()),
  //   new Todo(3,'learn to write ',false,new Date())
  //   // { id: 1,description: 'Learn to dance'},
  //   // { id: 2,description: 'Learn to Ride Bike'},
  //   // { id: 3,description: 'Learn to write code'}
  // ]
  
  message : string;
  
  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo()
  {
    this.todoService.retriveAllTodos('admin').subscribe
    (
      response => {
        console.log('response');
        this.todos=response;
      }
    )
  }

  updateTodo(id)
  {
    console.log(`update todo ${id}`);
     this.router.navigate(['todos',id]);
  }

  deleteTodo(id)
  {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('admin',id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete of id ${id} Successfull!`
        this.refreshTodo();
      }
    )
  }

  addTodo()
  {
    this.router.navigate(['todos',-1])
  }
}
