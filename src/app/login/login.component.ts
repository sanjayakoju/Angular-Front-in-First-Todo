import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Anguler.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // if(this.username==="admin" && this.password==="admin")
    //if(username==="admin" && password==='admin')
    // console.log(this.username);
    // if(this.username==="admin" && this.password==="admin")
    //if(username==="admin" && password==='admin')
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to the Welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }

  }


  handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username])
          console.log(data)
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      )
  }
}
