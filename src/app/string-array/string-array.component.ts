import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-array',
  templateUrl: './string-array.component.html',
  styleUrls: ['./string-array.component.css']
})
export class StringArrayComponent implements OnInit {

  constructor() { }
  count = 0;
  ngOnInit() {
  }
 
  // function returning string 
  name(name){
    return "welcome " + name;
  }

  // function returning array 
  getColors(){
    return ['black','green','orange', 'red'];
  }

  IncreaseCount(){
    this.count++;
  }

  decreaseCount(){
    this.count--;
  }

}
