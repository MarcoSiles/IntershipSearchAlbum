import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Album } from '../models/album.model';
import { Observable } from 'rxjs';
import albumsData from '../data/albumsData.json';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumUrl: string = "../data/albumsData.json";

  constructor(private http: HttpClient)  {}

  public getAlbums()  {
    return albumsData;
  }

  
}
