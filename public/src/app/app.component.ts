import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activePage: any;
  ngOnInit() {
    this.activePage = 'aboutMe'
  }
  changePage(string) {
    this.activePage = string;
  }

}
