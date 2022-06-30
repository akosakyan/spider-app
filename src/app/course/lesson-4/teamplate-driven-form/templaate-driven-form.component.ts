import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "template-driven-form",
  template: `
    <div class="form">
      <h2 id="registration">Registration Form</h2>
      <form (ngSubmit)="onSubmit()" #myForm>
        
      <div ngModelGroup="personDetails">
      <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          placeholder="Your name ..."
          name="firstname"
          required
        />

        <!-- <div>
          <small *ngIf="fname.invalid && fname.touched">First Name is required</small>
        </div> -->

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          placeholder="Your last name ..."
          name="lastname"
          required
        />

        <!-- <div>
          <small *ngIf="lname.invalid && lname.touched">First Name is required</small>
        </div> -->

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email ..."
          name="email"
          ngModel
          required
          email
        />

        <button (click)="setDefaultValues()">Set Default Values</button>
      </div>

        

        <label for="country">Country</label>
        <select id="country" name="country" ngModel>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="china">China</option>
          <option value="peru">Peru</option>
        </select>

        <label for="gender">Gender</label>
        <span *ngFor="let gen of gender">
          <input type="radio" id="{{gen.id}}" value="{{gen.value}}" name="geder" [ngModel]="defaultGender" />
          <label for="male">{{gen.value}}</label>
        </span>


        <label for="">Hebbies <i>Optional</i> </label>
        <div class="form-inline">
          <label for=""
            ><input type="checkbox" value="sports" id="" />Sports</label
          >
          <label for=""
            ><input type="checkbox" value="movies" id="" />Movies</label
          >
          <label for=""
            ><input type="checkbox" value="music" id="" />Music</label
          >
        </div>

        <button type="submit" value="Submit" class="btn" id="btn"  >Submit</button>
      </form>
    </div>


    <div class="form-data">
      <h3>Form Data</h3>
      <p>First name: <b>{{firstname}}</b></p>
      <p>Last name: <b>{{lastname}}</b></p>
      <p>Email: <b>{{email}}</b></p>
      <p>Country: <b>{{country}}</b></p>
      <p>Gender: <b>{{gen}}</b></p>

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

      .btn {
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

    `,
  ],
})
export class TemplateDrivenForm implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  gen: string;
  country: string;

  defaultGender = 'Male';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other  '},
  ]
  @ViewChild("myForm") form: NgForm;



  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
   
    this.firstname = this.form.value.pesronDetails.firstname;
    this.lastname = this.form.value.pesronDetails.lastname
    this.email = this.form.value.pesronDetails.email
    this.gen = this.form.value.geder
    this.country = this.form.value.country
  }

  setDefaultValues() {
    // this.form.form.patchValue({
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Doe',
    //     email: 'John.gmail.com'
    //   }
    // })
    console.log(this.form.control);
    
  }
}
