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
    college: "Harvard",
    degree: "BCA",
    specialization: ""
  },];

  userInfo = "";


  constructor(private router: Router) {
    if(this.userList) {
      this.displayList();
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
    this.userList.forEach((element, index) => {
      this.userInfo += `User-${index+1}:
      Name: ${element.name}
      College: ${element.college}
      Degree: ${element.degree}
      Specialization: ${element.specialization}
      `
    });
  }

  onSave() {
    this.userList.push(this.user);

    this.displayList();
  }

  onLogout() {
    this.router.navigateByUrl('');
  }


}
