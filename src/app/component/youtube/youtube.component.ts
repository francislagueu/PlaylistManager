import { Component, Inject} from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
import {AngularFire, FirebaseListObservable,FirebaseAuth,AuthProviders} from 'angularfire2'
@Component({
   //moduleId: module.id,
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})

export class YoutubeComponent{ 
    
    constructor(@Inject(FirebaseAuth) public _auth: FirebaseAuth){
    }
    //will change this
    public loginclicked(){
      this.doLogin();
    }
    public logoutclicked(){
      this.doLogout();
    }
    public doLogout(){
      this._auth.logout();
    }
    public doLogin(){
      this._auth.login();
    }
   ngAfterViewInit(){
      console.log(this._auth);
     
   }
}
