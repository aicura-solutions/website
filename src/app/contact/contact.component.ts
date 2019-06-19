import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  duckUrl = "assets/img/aicura-duck.png";
  teethUrl = "assets/img/aicura-teeth.png";
  contactForm: FormGroup;

  constructor(private form: FormBuilder, private http: HttpClient) {}

  public ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      message: new FormControl()
    });
  }

  public submitForm() {
    const contactData = this.contactForm.getRawValue();
    // cloud function endpoint
    this.http.post("", contactData).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
        console.log(err.error);
        console.log(err.name);
        console.log(err.email);
        console.log(err.message);
        console.log(err.status);
      }
    );
    console.log(contactData);
  }
}
