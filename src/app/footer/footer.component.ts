import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  linkedInLogoUrl = 'assets/img/linkedin-logo.png';
  youtubeLogoUrl = 'assets/img/youtube-logo.png';

  constructor() { }

  ngOnInit() {
  }

}
