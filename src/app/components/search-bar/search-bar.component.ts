import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor() {
    console.log("search bar is created !");
  }

  //implementing the OnInit hook from OnInit interface
  ngOnInit(): void {
    console.log("OnInit is called ehhe!");
  }


}
