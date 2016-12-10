import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.services';
import {Artist} from '../models/Artist';


@Component({
  moduleId:module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  {
  searchStr:string;
  albums : any[];
  searchRes : Artist[];
  constructor(private _spotifyService:SpotifyService){
         
    }
      searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes=res.artists.items;
        })
        //console.log(this.searchRes);
      }
      
  }
