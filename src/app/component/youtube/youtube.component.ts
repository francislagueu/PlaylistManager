import { Component } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

@Component({
  //moduleId: module.id,
  selector: 'youtube',
<<<<<<< HEAD
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
=======
  templateUrl: './youtube.component.html',
>>>>>>> 4c3e0fdd25fba88004bef8cd11c60e09b8cf79df
  providers: [YoutubeService]
})
export class YoutubeComponent {
    constructor(){
      console.log('Youtube Service Init....');
    }
}
