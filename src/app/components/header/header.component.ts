import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";

  constructor() { }


  //here we want to run some initial code like http request or something when the component loads
  ngOnInit(): void {
  }


  toggleAddTask() {
    console.log("Toggle");
  }

}
