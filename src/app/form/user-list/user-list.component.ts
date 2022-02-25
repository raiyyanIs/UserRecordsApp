import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, DoCheck, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges { 

  @Input() userList: any = [];
  newlist: any = [];

  constructor() { }

  ngOnInit(): void {
    //this.newlist = JSON.parse(JSON.stringify(this.userList));
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.newlist = JSON.parse(JSON.stringify(this.userList));
  }


}
