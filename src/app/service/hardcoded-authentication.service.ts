import { Injectable } from '@angular/core';


//Service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password)
  {
    //console.log('before '+this.isUserLoggedIn());
    if(username==="admin" && password==='admin')
    {
      sessionStorage.setItem('activeUser',username);
      //console.log('after '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('activeUser');
    return !(user === null);
  }

  logout()
  {
    sessionStorage.removeItem('activeUser');
  }
}
