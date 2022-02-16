import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  info = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigateByUrl('');
  }

  getInfo($event: string) {
    this.info = $event;
  }

}
