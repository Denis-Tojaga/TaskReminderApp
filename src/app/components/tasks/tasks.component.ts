import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from "../../mock-tasks";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //properties
  taskList: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
