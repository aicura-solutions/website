import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meet-the-team',
  templateUrl: './meet-the-team.component.html',
  styleUrls: ['./meet-the-team.component.scss']
})
export class MeetTheTeamComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Meet The Team');
  }

  ngOnInit() {
  }

}
