import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {LoginComponent} from './component/login/login.component';
import {FooterComponent} from './component/footer/footer.component';
import {SpotifyComponent} from './component/spotify/spotify.component';
import {YoutubeComponent} from './component/youtube/youtube.component';
import {RegisterComponent} from './component/register/register.component';

//Firebase related imports
import {AngularFireModule} from 'angularfire2';
import {AuthProviders, AuthMethods} from 'angularfire2';
export const firebaseConfig = {
  apiKey: 'AIzaSyDH_I1UcK-sOfFPx3gIeazuQdYq7kdSzCM', 
  authDomain: 'playlistmanager-8f6e8.firebaseapp.com',
  databaseURL: 'https://playlistmanager-8f6e8.firebaseio.com',
  storageBucket:'playlistmanager-8f6e8.appspot.com'
};


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
<<<<<<< HEAD
    LoginComponent
=======
    RegisterComponent
>>>>>>> 5e3f27d62435d7216342255f4269e700e16dfb30
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    MaterialModule.forRoot()
=======
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
>>>>>>> 5e3f27d62435d7216342255f4269e700e16dfb30
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
