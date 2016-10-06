
import {Injectable} from '@angular/core';
declare var gapi:any;

@Injectable()
export class YoutubeService{
	google;
    constructor(){
    	this.google = new Google();
        this.google.init();
        //why the hell can i not see the auth2 class member here???!!!
        console.log("prints as undefined", this.google.auth2);
    }
}


export class Google{
    private clientId;
    private apiKey;
    private scopes;
    private gapi;
    auth2;
    private client;
    constructor(){
        this.clientId = "788672495349-mmdrb1o2krhg9ll45mj750rah5fl57pe.apps.googleusercontent.com";
        this.apiKey="smiling-castle-143717";
        this.scopes = "https://www.googleapis.com/auth/youtube";

    }

    init(){
        gapi.load('client:auth2', ()=>this.initClient());

    }
    initClient(){
        gapi.auth2.init({
            client_id : this.clientId,
            response_type: 'code',
            scope:this.scopes
        }).then(
            (response)=>{
                this.auth2 = response
                //auth2 and response are the same thing here, and when I print, it prints just fine.
                console.log("auth2", this.auth2);
        },
            (reason)=>{console.log("error occurred with reason "+ reason)}
        );

    }

}
