import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC8ucGk2JsnAUQqkDrxlT2NQloVysvePRPwQqNrvk9QLqkIq3TEkBgt2F6oqwIoiV1aLAt22YOoezv815I'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe( map(response => {return response['albums'].items;}) );
  }

  searchArtist(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(response => {return response['artists'].items;}) );
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
      //.pipe( map(response => {return response['artists'].items;}) );
  }

  getAlbum(id:string){
    return this.getQuery(`albums/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map(response => {return response['tracks'];}) );
  }
}
