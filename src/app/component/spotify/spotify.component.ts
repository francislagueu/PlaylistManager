import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  //moduleId: module.id,
  selector: 'spotify',
<<<<<<< HEAD
  templateUrl: 'spotify.component.html',
  styleUrls: ['spotify.component.css'],
=======
  templateUrl: './spotify.component.html',
>>>>>>> 4c3e0fdd25fba88004bef8cd11c60e09b8cf79df
  providers: [SpotifyService]
})
export class SpotifyComponent {
    constructor(){
      console.log('Spotify Service Init.....');
    }
}
