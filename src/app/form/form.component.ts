import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  info = "";
  defInfo = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigateByUrl('');
  }

  getDefInfo($event: string) {
    this.defInfo = $event;
  }

  getInfo($event: string) {
    this.info = $event;
  }

}
