import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-ido',
  templateUrl: './what-ido.component.html',
  styleUrls: ['./what-ido.component.scss']
})
export class WhatIDoComponent implements OnInit {

  constructor() { }

  pageToShow: any
  ngOnInit() {
    this.pageToShow = 'info';
  }

  changePage(string) {
    this.pageToShow = string;
  }

}
