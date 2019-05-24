import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  privacyPolicyUrl = 'assets/resources/Aicura-Privacy-Policy.pdf';
  duckUrl = 'assets/img/aicura-duck.png';

  constructor() { }

  ngOnInit() {
  }

}
