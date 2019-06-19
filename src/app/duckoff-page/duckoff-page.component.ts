import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-duckoff-page',
  templateUrl: './duckoff-page.component.html',
  styleUrls: ['./duckoff-page.component.scss']
})
export class DuckoffPageComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Ducking All Over The World');
  }

}
