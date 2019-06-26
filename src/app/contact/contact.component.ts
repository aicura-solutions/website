import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
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
  submitted = false;

  constructor(
    private form: FormBuilder,
    private http: HttpClient,
    title: Title
  ) {
    title.setTitle('Contact Us');
  }

  public ngOnInit(): void {
    this.contactForm = this.form.group({
      name: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      message: [undefined, [Validators.required]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  public submitForm() {
    const contactData = this.contactForm.getRawValue();
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    if (this.submitted) {
      this.contactForm = this.form.group({
        name: [undefined],
        email: [undefined],
        message: [undefined]
      });
    }

    this.http
      .post(
        'https://europe-west2-aicu-websrv-prod.cloudfunctions.net/http',
        contactData
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}
