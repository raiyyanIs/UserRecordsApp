import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  info = "";
  // defInfo = "";
  mylist = [
    {
      name: "Raiyyan",
      college: "DU",
      degree: "B.Tech",
      specialization: null
    },
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigateByUrl('');
  }

  // getDefInfo($event: string) {
  //   this.defInfo = $event;
  // }

  getInfo($event: any) {
    // this.info = $event;
    this.mylist.push($event);
  }

}
