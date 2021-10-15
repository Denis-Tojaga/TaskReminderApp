import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }


  toggleAddTask(): void {
    //we change the value and pass that new value inside the subject, so it remains the same when someone else wants to use it 
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }


  //this method will fire of when we toggle
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
