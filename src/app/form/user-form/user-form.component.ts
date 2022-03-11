import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup | any;


  @Output() newUser = new EventEmitter<{name: string, college: string, degree: string, specialization: string}>();


  constructor() {
  }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'college': new FormControl(null),
      'degree': new FormControl("", Validators.required), 
      'specialization': new FormControl(null)
    });
  }


  checkValidity(): boolean {
    if (this.userForm.valid) {
      return true;
    }
    return false;
  }


  onSave() {
    console.log(this.userForm);
    this.newUser.emit(this.userForm.value);
  }

  onReset() {
    this.userForm.reset();
  }


}
