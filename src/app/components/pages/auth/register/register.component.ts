import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  stepOne = true;
  stepTwo = false;
  stepTrhee = false;
  banderaLlenaImg = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  

  stepOneNext(data:any) {
    this.stepOne = false;
    this.stepTwo = true;
    
  }

  setBanderaImg(eve:any) {
    this.banderaLlenaImg = true;
  }


}
