import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

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


  constructor(private router: Router) {
    if(this.userList) {
      this.userList.forEach((element, index) => {
        this.userInfo += ("<br><br>Name: " + element.name +
        "<br>College: " + element.college +
        "<br>Degree: " + element.degree +
        "<br>Specialization: " + element.specialization) 
      }); 
    }
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

  displayList() {
      if(!this.user.specialization) {
        this.user.specialization = "None";
      }

      this.userInfo += ("<br><br>Name: " + this.user.name +
      "<br>College: " + this.user.college +
      "<br>Degree: " + this.user.degree +
      "<br>Specialization: " + this.user.specialization 
      ); 
  }

  onSave() {
    this.displayList();
  }

  onLogout() {
    this.router.navigateByUrl('');
  }


}
