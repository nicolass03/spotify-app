import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  artists:any[] = [];
  loading:boolean;
    
  constructor(private _spotify:SpotifyService) { 

  }

  ngOnInit() {
  }

  buscarArtista(termino:string){
    if(termino!=null && termino!=""){
      this.loading = true;
      this._spotify.searchArtist(termino).subscribe((response:any) => {
        console.log(response);
        this.artists = response;
        this.loading = false;
      });
    }
  }
}
