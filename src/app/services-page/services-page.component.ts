import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';
  speechMarksLUrl = 'assets/img/speech-marks-l.png';
  speechMarksRUrl = 'assets/img/speech-marks-r.png';
  rubixUrl = 'assets/img/rubix-cube.png';
  aicuraDotUrl = 'assets/img/aicura-dot.png';
  boxesUrl = 'assets/img/boxes.png';
  block1Url = 'assets/img/block1.png';
  block2Url = 'assets/img/block2.png';
  underlineUrl = 'assets/img/underline.png';
  rocketUrl = 'assets/img/aicura-services-run-rocket.png';

  constructor(title: Title) {
    title.setTitle('Services');
   }

  ngOnInit() {
  }

}
