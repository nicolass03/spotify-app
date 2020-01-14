import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styles: []
})
export class AlbumComponent implements OnInit {

  constructor(private _router:ActivatedRoute,
              private _spotify:SpotifyService) { 

      this._router.params.subscribe(params => {
        this.getAlbum(params['id']);
      });
    }

  ngOnInit() {
  }

  getAlbum(id:string){
    this._spotify.getAlbum(id)
      .subscribe(response => {
        console.log(response);
      })
  }

}
