import { Component } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';
@Component({
   //moduleId: module.id,
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
  providers: [YoutubeService]
})
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

    }
}
