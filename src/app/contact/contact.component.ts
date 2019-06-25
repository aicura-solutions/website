import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  duckUrl = 'assets/img/aicura-duck.png';
  teethUrl = 'assets/img/aicura-teeth.png';
  contactForm: FormGroup;

  constructor(private form: FormBuilder, private http: HttpClient, title: Title) {
    title.setTitle('Contact Us');
  }

  public ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    });
  }

  public submitForm() {
    const contactData = this.contactForm.getRawValue();

    this.http
      .post(
        'https://us-central1-aicura-contact-form.cloudfunctions.net/http',
        contactData
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          console.log('This is general error: ' + err.error);
          console.log('This is name error: ' + err.name);
          console.log('This is email error: ' + err.email);
          console.log('This is message error: ' + err.message);
          console.log('This is status error: ' + err.status);
        }
      );
  }
}
