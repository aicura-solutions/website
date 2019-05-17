import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  linkedInLogoUrl = 'assets/img/linkedin-logo.png';
  youtubeLogoUrl = 'assets/img/youtube-logo.png';
  facebookLogoUrl = 'assets/img/facebook-logo.png';

  constructor() { }

  ngOnInit() {
  }

}
