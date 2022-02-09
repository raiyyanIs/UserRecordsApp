import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email = ""
  password = "";
  status = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if(this.email && this.password) {
      this.router.navigateByUrl('/form');
    }
  }

}