import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('myform') inputform: ElementRef | any;
  @ViewChild('myname') inputname: ElementRef | any;

  user = {
    name: "",
    college: "",
    degree: "",
    specialization: ""
  };

  //userInfo = "";

  @Output() infoEntered = new EventEmitter<{name : string, college : string, degree : string, specialization: string}>();


  constructor() {

  }

  ngOnInit(): void {
  }

  checkValidity(): boolean {
    if (this.user.name && this.user.degree) {
      return true;
    }
    else {
      return false;
    }
  }

  displayInfo() {
      // if(!this.user.specialization) {
      //   this.user.specialization = "None";
      // }

      // this.userInfo += ("<br><br>Name: " + this.user.name +
      // "<br>College: " + this.user.college +
      // "<br>Degree: " + this.user.degree +
      // "<br>Specialization: " + this.user.specialization 
      // );
      
      console.log(this.user);
      
      this.infoEntered.emit(this.user);
  }

  onSave() {
    this.displayInfo();

  }

  onReset() {
    this.inputform.nativeElement.reset();
  }


}
