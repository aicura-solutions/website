import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // images
  rocketUrl = 'assets/img/aicura-rocket-medium.png';
  soldiersUrl = 'assets/img/soldiers.png';
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

  meetTheTeamUrl = '/meet-the-team';
  communityProjectsUrl = '/community-projects';
  seeAllPostsUrl = '/insights';
  contactUrl = '/contact';
  osBankingUrl = '/open-source-banking';
  frontendAutomationUrl = '/front-end-testing-automation';

  constructor() { }

  ngOnInit() {
    $('.button__watch-video').on('click', e => {
      e.preventDefault();
      $('.video-container').addClass('show');
    });

    $('.video-container').on('click', e => {
      e.preventDefault();
      e.stopPropagation();
      $('.video-container').removeClass('show');
    });

    $('iframe').on('click', e => {
      e.stopPropagation();
    });
  }

}
