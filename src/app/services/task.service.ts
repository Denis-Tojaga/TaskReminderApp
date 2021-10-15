import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';


//we make an object that will contain mupltiple properties, those properties will define the headers request
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}


@Injectable({
  providedIn: 'root'
})



export class TaskService {

  //properties
  private apiURL = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  //method for fetching all the tasks, it returns Tasks array
  getTasks(): Observable<Task[]> {

    /* 
      WITHOUT USING HTTP CLIENT
      //since TASKS array is not Observable, we need to make it Observable by wrapping it inside of(TASKS)
      const tasks = of(TASKS);
      return tasks;
      */

    //With using HTTP Client
    return this.http.get<Task[]>(this.apiURL);
  }


  //method for deleting specific task
  deleteTask(task: Task): Observable<Task> {
    //we add the id of a task that has to be deleted on the apiURL and pass it to the delete method
    const url = `${this.apiURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }


  //method that updates a task
  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }



  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }

}
