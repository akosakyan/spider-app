import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "reactive-form",
  template: `
    <div class="form">
      <h2 id="registration">Registration Form</h2>
      <form [formGroup]="reactiveForm">
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          placeholder="Your name ..."
          formControlName="firstname"
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          placeholder="Your last name ..."
          formControlName="lastname"
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email ..."
          formControlName="email"
        />

        <label for="country">Country</label>
        <select id="country" formControlName="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="china">China</option>
          <option value="peru">Peru</option>
        </select>

        <label for="gender">Gender</label>
        <span *ngFor="let gen of gender">
          <input
            type="radio"
            id="{{ gen.id }}"
            value="{{ gen.value }}"
            name="geder"
            formControlName="gender"
          />
          <label for="male">{{ gen.value }}</label>
        </span>

        <label for="">Hebbies <i>Optional</i> </label>
        <div class="form-inline">
          <label for=""
            ><input
              type="checkbox"
              value="sports"
              checked
              id=""
              formControlName="hobbies"
            />Sports</label
          >
          <label for=""
            ><input
              type="checkbox"
              value="movies"
              id=""
              formControlName="hobbies"
            />Movies</label
          >
          <label for=""
            ><input
              type="checkbox"
              value="music"
              checked
              id=""
              formControlName="hobbies"
            />Music</label
          >
        </div>

        <input type="submit" value="Submit" class="btn" id="btn" />
      </form>
    </div>
  `,
  styles: [
    `
      input[type="text"],
      [type="email"],
      select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }

      input[type="submit"] {
        width: 100%;
        background-color: #4caf50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type="submit"]:hover {
        background-color: #45a049;
      }

      .form {
        border-radius: 5px;
        background-color: #6b705c;
        padding: 20px;
        width: 400px;
        margin: 30px auto;
      }

      input.ng-invalid.ng-touched {
        border: red 1px solid;
      }
    `,
  ],
})
export class ReactiveFormLearn implements OnInit {
  a: FormGroup;
  reactiveForm = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    gender: new FormControl(null),
    country: new FormControl(null),
    hobbies: new FormControl(null),
  });
  // reactiveForm!: FormGroup | undefined

  constructor(private fb: FormBuilder) {
    this.a = this.fb.group({});
  }

  ngOnInit(): void {
    // this.reactiveForm = new FormGroup({
    //   firstname: new FormControl(null, Validators.required),
    //   lastname: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.required),
    //   gender: new FormControl(null),
    //   country: new FormControl(null),
    //   hobbies: new FormControl(null),
    // });
  }

  onSumbit() {
    console.log(this.reactiveForm);
  }
}
