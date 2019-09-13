import { Router } from '@angular/router';
import { AuthService } from './../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  tryFacebookLogin() {
    console.log('success tryFacebookLogin')
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['user']);
        console.log('success res')
      })
  }

}
