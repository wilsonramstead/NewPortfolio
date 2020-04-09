import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  infoToShow: any;
  ngOnInit() {
    this.infoToShow = 'description';
  }

  showInfo(string) {
    this.infoToShow = string;
  }

}
