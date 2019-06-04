import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // images
  rocketUrl = 'assets/img/aicura-rocket-medium.png';
  soldiersUrl = 'assets/img/aicura-infantry.png';
  boxesUrl = 'assets/img/boxes.png';
  rubixUrl = 'assets/img/rubix-cube.png';
  duckUrl = 'assets/img/aicura-duck.png';
  pigUrl = 'assets/img/aicura-pig.png';
  buildUrl = 'assets/img/build.png';
  innovateUrl = 'assets/img/innovate.png';
  runUrl = 'assets/img/run.png';

  barclaysUrl = 'assets/img/brands/barclays-logo.svg';
  capcoUrl = 'assets/img/brands/capco-logo.svg';
  capgeminiUrl = 'assets/img/brands/capgemini-logo.svg';
  deutscheUrl = 'assets/img/brands/deutsche-bank-logo.svg';
  jlUrl = 'assets/img/brands/john-lewis-logo.svg';
  natwestUrl = 'assets/img/brands/natwest-logo.svg';
  tsbUrl = 'assets/img/brands/tsb-logo.svg';
  wongaUrl = 'assets/img/brands/wonga-logo.svg';

  meetTheTeamUrl = '/our-team';
  aboutUsUrl = '/about-us';
  seeAllPostsUrl = '/insights';
  contactUrl = '/contact';
  osBankingUrl = '/open-source-banking';
  frontendAutomationUrl = '/front-end-testing-automation';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Aicura Solutions');

    const watchVideoBtn = document.getElementsByClassName('button__watch-video');
    const videoContainer = document.getElementsByClassName('video-container');
    const iframe = document.getElementsByTagName('iframe');

    watchVideoBtn[0].addEventListener('click', event => {
      event.preventDefault();
      videoContainer[0].className += ' show';
    });

    videoContainer[0].addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      videoContainer[0].classList.remove('show');
    });

    iframe[0].addEventListener('click', event => {
      event.stopPropagation();
    });

  }

}
