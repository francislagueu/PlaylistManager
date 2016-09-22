import { Component } from '@angular/core';
import {YoutubeService} from '../../services/youtube.service';

@Component({
   moduleId: module.id,
  selector: 'youtube',
  templateUrl: 'youtube.component.html',
  styleUrls: ['youtube.component.css'],
  providers: [YoutubeService]
})
export class YoutubeComponent {
    constructor(){
      console.log('Youtube Service Init....');
    }
}
