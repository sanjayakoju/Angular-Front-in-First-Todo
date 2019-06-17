import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN='token'
export const AUTHENTICATED_USER='activeUser'

//Service
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }
  // Hardcoded authentication
  // authenticate(username, password)
  // {
  //   //console.log('before '+this.isUserLoggedIn()); 
  //   if(username==="admin" && password==='admin')
  //   {
  //     sessionStorage.setItem('activeUser',username);
  //     //console.log('after '+this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

  executeAuthenticationService(username,password) {
   
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }
    )
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data=>{
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          }
        )
    );
    //console.log("Execute Hello World Bean Service");
  }


  getAuthenticatedUser()
  {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken()
  {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN);
  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem(TOKEN);
    return !(user === null);
  }

  logout()
  {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean
  {
    constructor( public message:string){}
  }