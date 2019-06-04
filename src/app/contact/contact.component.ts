import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';

  constructor(title: Title) {
    title.setTitle('Contact');
  }

  ngOnInit() {
  }

}
