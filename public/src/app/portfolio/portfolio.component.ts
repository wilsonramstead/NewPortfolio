import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  infoToShow: any;
  infoToShow2: any;
  infoToShow3: any;
  ngOnInit() {
    this.infoToShow = 'description';
    this.infoToShow2 = 'description';
    this.infoToShow3 = 'description';
  }

  showInfo(string) {
    this.infoToShow = string;
  }
  showInfo2(string) {
    this.infoToShow2 = string;
  }
  showInfo3(string) {
    this.infoToShow3 = string;
  }

}
