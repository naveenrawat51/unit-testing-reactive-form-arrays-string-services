import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringArrayComponent } from './string-array.component';

describe('StringArrayComponent', () => {
  let component: StringArrayComponent;
  let fixture: ComponentFixture<StringArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   
    expect(component).toBeTruthy();

  });

// return the exact output of the function(return string) and we check for exact output we are geeting or not
 it("should return the name of user -- too specific", ()=>{

  expect(component.name("Naveen")).toBe('welcome Naveen');

 })

 // return the exact output of the function(return string) and we don't check for exact output we are geeting or not
  it("should return the name of user -- not too specific", ()=>{

  expect(component.name("Naveen")).toContain('Naveen')

 })

 // return array and test all elements are there order doesn't matter now
 it("should return an array", ()=>{

   const result = component.getColors();

   expect(result).toContain('black');
   expect(result).toContain('red');
   expect(result).toContain('orange');
   expect(result).toContain('green');

 })

 // increase count
 it("count should be increased when clicked on increaseCount button", ()=> {

   component.IncreaseCount();
   expect(component.count).toBe(1);

 });

 // decrease count
 it("count should be decrease when clicked on decreaseCount button", ()=> {

   component.decreaseCount();
   expect(component.count).toBe(-1);

 });

});
