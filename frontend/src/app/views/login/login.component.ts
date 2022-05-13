import { LoginService } from './shared/login.service';
import { AccountService } from './shared/account.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from './shared/user'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private loginService: LoginService ) { }
  ngOnInit(): void {
  }

  loginModel = new User ();
  userModel = new User ("", "")
  onsubmit() {
    console.log(this.userModel)
    console.log(this.loginModel)
    
    this.loginService.login(this.loginModel).subscribe((response)=>{
      console.log (response)
  })
}
}
