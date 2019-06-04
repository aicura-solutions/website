import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';
  aboutUsDucksUrl = 'assets/img/about-us-ducks.png';
  childrensLiteracyUrl = 'assets/img/childrens-literacy.png';
  joinTheSquadUrl = 'assets/img/join-the-squad.png';
  lidgettonUrl = 'assets/img/lidgetton.png';
  ourCeoUrl = 'assets/img/our-ceo.png';
  qhubekaUrl = 'assets/img/qhubeka.png';
  speechMarksLUrl = 'assets/img/speech-marks-l.png';
  speechMarksRUrl = 'assets/img/speech-marks-r.png';
  aicuraPigUrl = 'assets/img/aicura-pig.png';

  constructor(title: Title) {
    title.setTitle('About Us');
  }

  ngOnInit() {
  }

}
