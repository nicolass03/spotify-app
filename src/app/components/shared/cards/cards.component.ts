import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {

  @Input() items:any[] = [];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  openArtist(item:any){
    console.log(item);
    let id = item.id;
    if(item.type === 'artist'){
      this._router.navigate(['/artist',id]);
    }
    else{
      this._router.navigate(['/album',id]);
    }
  }
}
