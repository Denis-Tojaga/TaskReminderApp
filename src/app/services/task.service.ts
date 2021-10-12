import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})



export class TaskService {

  constructor() { }

  //method for fetching all the tasks, it returns Tasks array
  getTasks(): Task[] {
    return TASKS;
  }

}
