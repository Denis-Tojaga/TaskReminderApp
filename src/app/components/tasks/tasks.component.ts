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


  //method that triggers when onDeleteTask event is triggered
  deleteTask(task: Task): void {

    //this will first call the method inside the service and delete the task
    //and then the array method is going to set the taskList to a new filtered taskList 
    this.taskService.deleteTask(task).subscribe(() => {
      this.taskList = this.taskList.filter((item) => { return item.id != task.id });
    });
  }


  //method that will update the reminder property on double clicked task
  toggleReminder(task: Task): void {
    //this method will trigger when the emitter onToggleReminder is activated
    //this method will only change the value of a reminder 
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }


  //method that adds a new task in the collection
  addTask(task: Task): void {
    //when we add task, after subscribe method is done we will get single task, we must add that task in our array to refresh it
    this.taskService.addTask(task).subscribe((addedItem) => {
      this.taskList.push(addedItem)
    });
  }
}
