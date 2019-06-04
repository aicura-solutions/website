import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-open-source-banking',
  templateUrl: './open-source-banking.component.html',
  styleUrls: ['./open-source-banking.component.scss']
})
export class OpenSourceBankingComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';

  constructor(title: Title) {
    title.setTitle('Open Source Banking');
  }

  ngOnInit() {
  }

}
