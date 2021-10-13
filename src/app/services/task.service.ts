import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASKS } from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})



export class TaskService {

  constructor() { }

  //method for fetching all the tasks, it returns Tasks array
  getTasks(): Observable<Task[]> {
    //since TASKS array is not Observable, we need to make it Observable by wrapping it inside of(TASKS)
    const tasks = of(TASKS);
    return tasks;
  }

}
