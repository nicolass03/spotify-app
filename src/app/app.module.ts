import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AlbumComponent } from './components/album/album.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

/// IMPORT ROUTERS ///


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    NavbarComponent,
    SearchComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    AlbumComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
