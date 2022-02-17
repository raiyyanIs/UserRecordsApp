import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    name: "",
    college: "",
    degree: "",
    specialization: ""
  };

  userList = [{
    name: "John",
    college: "DU",
    degree: "B.Sc.",
    specialization: "Maths"
  },];

  userInfo = "";
  dInfo = "";

  @Output() infoEntered = new EventEmitter<string>();
  @Output() defaultInfo = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit(): void {
    if(this.userList) {
      this.userList.forEach((element) => {
        this.dInfo += ("<br><br>Name: " + element.name +
        "<br>College: " + element.college +
        "<br>Degree: " + element.degree +
        "<br>Specialization: " + element.specialization) 
      }); 
    }
    this.defaultInfo.emit(this.dInfo);

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
      if(!this.user.specialization) {
        this.user.specialization = "None";
      }

      this.userInfo += ("<br><br>Name: " + this.user.name +
      "<br>College: " + this.user.college +
      "<br>Degree: " + this.user.degree +
      "<br>Specialization: " + this.user.specialization 
      ); 
      this.infoEntered.emit(this.userInfo);
  }

  onSave() {
    this.displayInfo();
  }


}
