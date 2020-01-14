import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  releases:any[] = [];
  loading:boolean;
  constructor(private _spotify:SpotifyService) {
      this.loading = true;
      this._spotify.getNewReleases().subscribe((response:any) => {
        this.releases = response;
        this.loading = false;
      })
   }

  ngOnInit() {
  }

}
