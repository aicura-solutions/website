import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-front-end-automation',
  templateUrl: './front-end-automation.component.html',
  styleUrls: ['./front-end-automation.component.scss']
})
export class FrontEndAutomationComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';

  constructor(title: Title) {
    title.setTitle('Front-end Testing Automation');
  }

  ngOnInit() {
  }

}
