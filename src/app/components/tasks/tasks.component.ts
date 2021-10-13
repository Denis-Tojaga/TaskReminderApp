import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //properties

  //initialize the taskList property with an empty array for the beginning
  taskList: Task[] = [];

  //adding the TaskService as a provider in constructor declaration
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //taskService has access to everything that imported TaskServide has 
    //we see this subscribe method as a promise in which we pass in an arrow function that receives the responseValue and do something with it
    this.taskService.getTasks().subscribe((responseValue) => {
      this.taskList = responseValue;
    });
  }

}
