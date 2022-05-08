import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm! : FormGroup;
  constructor() { }
  @Input () btnText!: string
  ngOnInit(): void {
  }

  submit() {
    console.log("Enviou formulário");
  }
}
