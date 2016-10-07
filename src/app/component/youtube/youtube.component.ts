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
<<<<<<< Updated upstream
export class YoutubeComponent{
	  // Auth:Promise<Object>;
    constructor(private ytservice: YoutubeService){

    }
    ngAfterViewInit(){
      // console.log("service in afterinit: ", this.ytservice);
      // this.ytservice.getAuth().then(
      //   (response) =>{
      //   this.Auth = response;
      //   },
      //   (reason) => {
      //     console.log("failed to grab Auth object in component with reason: " + reason);
      //   });

=======
export class YoutubeComponent{ 
    
    constructor(@Inject(FirebaseAuth) public _auth: FirebaseAuth){
    }
    //will change this
    public loginclicked(){
      this.doLogin();
>>>>>>> Stashed changes
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
