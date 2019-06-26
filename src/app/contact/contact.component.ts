import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective
} from '@angular/forms';

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
  formRef: FormGroupDirective;

  constructor(private form: FormBuilder, private http: HttpClient, title: Title) {
    title.setTitle('Contact Us');
  }

  ngOnInit() {
    this.contactForm = this.form.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      message: [undefined, [Validators.required]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  alert(message: string) {
    window.alert(message);
  }

  public submitForm() {
    const contactData = this.contactForm.getRawValue();
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.http
      .post(
        'https://europe-west2-aicu-websrv-prod.cloudfunctions.net/http',
        contactData
      )
      .subscribe(
        res => {
          alert(`Your message has been submitted- we'll be in touch soon!`);
          window.location.reload();
        },
        err => {
          if (err.status == 200) {
            alert(`Your message has been submitted- we'll be in touch soon!`);
            window.location.reload();
          } else {
            alert('There was a problem submitting your message, please try again.');
            console.log(err);
          }
        }
      );
  }
}
