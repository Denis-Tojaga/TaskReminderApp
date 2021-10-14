import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})


export class AddTaskComponent implements OnInit {

  //we are outputing an emitter called onAddTask and its related to Task
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();


  //form fields
  text: string;
  day: string;
  reminder: boolean = false;
  //class properties
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe((returnedValue) => {
      this.showAddTask = returnedValue;
    });
  }

  ngOnInit(): void {
  }


  //method that will submit all the values currently in input fields on the form
  onSubmit() {
    if (this.ValidateFields()) {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      };

      this.onAddTask.emit(newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    }

  }


  //method for validating input fields
  ValidateFields(): boolean {
    return this.text.length != 0 && this.day.length != 0;
  }

}
