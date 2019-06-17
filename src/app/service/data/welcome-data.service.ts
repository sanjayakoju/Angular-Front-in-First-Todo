import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBean() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldBeanWithParameter(name) {
    // hardcoded
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // }
    // )


    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
      //{ headers }
    );
    //console.log("Execute Hello World Bean Service");
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'admin';
  //   let password = 'admin';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
