import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


export class User {
  constructor( 
    public firstName: string,
    public lastName: string,
    public email: string, 
    public password: string){}
}


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  form: FormGroup;
  @Output() loggedIn = new EventEmitter<User>();

   constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
  });
  }

  // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

  login(){
    console.log(this.form.value);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
     }
    if(this.form.valid){
      this.loggedIn.emit(
        new User(
          this.form.value.firstName,
          this.form.value.lastName,
          this.form.value.email,
          this.form.value.password
        )
      );
    }
  }

}
