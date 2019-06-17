import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  welcomeMessageFromService:string

  //ActivatedRoute
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage()
  {
    console.log(this.service.executeHelloWorldBean());
    this.service.executeHelloWorldBean().subscribe(
      // response => this.handleSuccessfulResponse(response)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("Get Welcome Message");

    //console.log('last line of welcome Message')
  }

  getWelcomeMessageWithParameter()
  {
    console.log(this.service.executeHelloWorldBean());
    this.service.executeHelloWorldBeanWithParameter(this.name).subscribe(
      // response => this.handleSuccessfulResponse(response)
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    //console.log("Get Welcome Message");

    //console.log('last line of welcome Message')
  }

  handleSuccessfulResponse(response)
  {
    this.welcomeMessageFromService=response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error)
  {
    //console.log(error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message
  }
}
