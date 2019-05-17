import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLoginComponent, User } from './app-login.component';

describe('AppLoginComponent', () => {
  let component: AppLoginComponent;
  let fixture: ComponentFixture<AppLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with four controls', ()=> {
    expect(component.form.contains("firstName")).toBeTruthy();
    expect(component.form.contains("lastName")).toBeTruthy();
    expect(component.form.contains("email")).toBeTruthy();
    expect(component.form.contains("password")).toBeTruthy();
  })

  it('form invalid when empty', ()=>{
    expect(component.form.valid).toBeFalsy();
  })

  it('firstName field validity', () => {
   let errors = {};
   let firstName = component.form.get('firstName');
   expect(firstName.valid).toBeFalsy();
   
   // firstName required
   errors = firstName.errors || {};
   expect(errors['required']).toBeTruthy();

   // Set firstName somthing
   firstName.setValue('Naveen');
   errors = firstName.errors || {};
   expect(errors['required']).toBeFalsy();
  })

  it('lastName field validity', () => {
    let errors = {};
    let lastName = component.form.get('lastName');
    expect(lastName.valid).toBeFalsy();
    
    // firstName required
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
 
    // Set firstName somthing
    lastName.setValue('Rawat');
    errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
   })


  it('email field validity', () => {
    let errors = {};
    let email = component.form.get('email');
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    
    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.form.get('password');
    expect(password.valid).toBeFalsy();

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
   
    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form emits a user', ()=>{

    expect(component.form.valid).toBeFalsy();
    
    component.form.get('firstName').setValue("Naveen");
    component.form.get('lastName').setValue("Rawat");
    component.form.get('email').setValue("test@test.com");
    component.form.get('password').setValue("123456789");
    expect(component.form.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe( value => user = value );

    // Trigger the login function
    component.login()

    // Now we can check to make sure the emitted value is correct
    expect(user.firstName).toBe("Naveen");
    expect(user.lastName).toBe("Rawat");
    expect(user.email).toBe("test@test.com");
    expect(user.password).toBe("123456789");
    
  })


});

