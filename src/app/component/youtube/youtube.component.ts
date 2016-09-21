import { Component } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

@Component({
  moduleId: module.id,
  selector: 'youtube',
  templateUrl: './component/youtube/youtube.component.html',
  providers: [YoutubeService]
})
export class YoutubeComponent {
    constructor(){
      console.log('Youtube Service Init....');
    }
}
