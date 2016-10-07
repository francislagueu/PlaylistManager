import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {SpotifyComponent} from './component/spotify/spotify.component';
import {YoutubeComponent} from './component/youtube/youtube.component';
<<<<<<< Updated upstream
import {RegisterComponent} from './component/register/register.component';
=======
//Firebase related imports
import {AngularFireModule} from 'angularfire2';
import {AuthProviders, AuthMethods} from 'angularfire2';
export const firebaseConfig = {
  apiKey: 'AIzaSyDH_I1UcK-sOfFPx3gIeazuQdYq7kdSzCM', 
  authDomain: 'playlistmanager-8f6e8.firebaseapp.com',
  databaseURL: 'https://playlistmanager-8f6e8.firebaseio.com',
  storageBucket:'playlistmanager-8f6e8.appspot.com'
};
>>>>>>> Stashed changes

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method:AuthMethods.Redirect,
  remember: 'default',
  scope: ['https://www.googleapis.com/auth/youtube']

}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SpotifyComponent,
    YoutubeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
