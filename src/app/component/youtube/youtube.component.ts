import { Component } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
declare var gapi:any;
@Component({
   moduleId: module.id,
  selector: 'youtube',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent {
	clientId:"788672495349-mmdrb1o2krhg9ll45mj750rah5fl57pe.apps.googleusercontent.com";
	apiKey="smiling-castle-143717";
	scopes = "https://www.googleapis.com/auth/youtube";
	gapi;
	auth2;
    constructor(){
      console.log('Youtube Service Init....');
      gapi.load('client:auth2',this.initAuth());
    }
    ngAfterViewInit(){
    	this.initAuth();
    	console.log("gapi", gapi);
    }
    public initAuth(){

    }
    public onSignIn(googleUser){

    }
}
