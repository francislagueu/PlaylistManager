import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  //moduleId: module.id,
  selector: 'spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css'],
  providers: [SpotifyService]
})
export class SpotifyComponent {
    constructor(){
      console.log('Spotify Service Init.....');
    }
}
