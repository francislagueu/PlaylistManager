import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'spotify',
  templateUrl: './component/spotify/spotify.component.html',
  providers: [SpotifyService]
})
export class SpotifyComponent {
    constructor(){
      console.log('Spotify Service Init.....');
    }
}
