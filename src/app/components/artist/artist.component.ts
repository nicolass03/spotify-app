import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist:any;
  loading:boolean;
  topTracks: any[] = [];

  constructor(private _router:ActivatedRoute,
              private _spotify:SpotifyService) { 

    this._router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }
    
  getArtist(id:string){
    this.loading = true;
    this._spotify.getArtist(id)
      .subscribe(response => {
        this.artist = response;
        console.log(response);
        this.loading = false;
      })
  }

  getTopTracks(id:string){
    this._spotify.getTopTracks(id)
      .subscribe(response => {
        console.log(response);
        this.topTracks = response;
      });
  }

  ngOnInit() {
  }

}
