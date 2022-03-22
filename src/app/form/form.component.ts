import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

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

  getInfo(event: any) {
    
    console.log(event);
    this.mylist.push(event);
  }



}
