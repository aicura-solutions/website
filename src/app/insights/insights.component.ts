import { Component, OnInit } from '@angular/core';
import { all } from 'q';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';
  binoUrl = 'assets/img/insights.png';

  noResults = false;

  loadAll = true;
  loadEvents = false;
  loadPress = false;
  loadInsights = false;
  loadCaseStudies = false;

  constructor(title: Title) {
    title.setTitle('Insights');
  }

  ngOnInit() {
  }

  onClickAll() {
    this.loadAll = true;
    this.loadEvents = false;
    this.loadPress = false;
    this.loadInsights = false;
    this.loadCaseStudies = false;
    this.noResults = false;
  }

  onClickEvents() {
    this.loadAll = false;
    this.loadEvents = true;
    this.loadPress = false;
    this.loadInsights = false;
    this.loadCaseStudies = false;
    this.noResults = false;
  }
  onClickPress() {
    this.loadAll = false;
    this.loadEvents = false;
    this.loadPress = true;
    this.loadInsights = false;
    this.loadCaseStudies = false;
    this.noResults = true;
  }
  onClickInsights() {
    this.loadAll = false;
    this.loadEvents = false;
    this.loadPress = false;
    this.loadInsights = true;
    this.loadCaseStudies = false;
    this.noResults = false;
  }
  onClickCaseStudies() {
    this.loadAll = false;
    this.loadEvents = false;
    this.loadPress = false;
    this.loadInsights = false;
    this.loadCaseStudies = true;
    this.noResults = true;
  }

}
