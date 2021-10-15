import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  title: string = "Task Tracker";
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((returnedValue) => {
      this.showAddTask = returnedValue;
    });
  }


  //here we want to run some initial code like http request or something when the component loads
  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  //method that will check if the router.url is the same as the parameter one
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
