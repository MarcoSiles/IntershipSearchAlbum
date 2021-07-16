import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Album } from '../models/album.model';
import albumsData from '../data/albumsData.json';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumUrl: string = "../data/albumsData.json";
  sortOrder:boolean=true;
  constructor(private http: HttpClient)  {

  }

  public getAlbums()  {
    return this.sortList(albumsData);
  }

  public getAlbum(artist:string){
    const words: string[] = artist.toString().trim().split(' ');
    var finded= false;
    var res = albumsData.filter(
      (album: Album) => {
        let flag=false;
        words.forEach(word => {
          if (album.artistName.toLowerCase().includes(word) || album.artistName.toUpperCase().includes(word) || album.artistName.includes(word)){
            flag = true;
            finded = true;
          }
        });
        return flag;
      }
    );
    if(finded)
    {
      if(artist=="")
      {
        return this.sortList(albumsData);
      }
      else
      {
        return this.sortList(res);
      }
    }
    else
    {
      return undefined;
    }
  }
  public sortOrderAlbums(sortOrder:boolean)
  {
    this.sortOrder=sortOrder;
  }
  private sortList(list:any)
  {
    if(this.sortOrder)
    {
      list.sort((a:any, b:any) => {
        let fa = a.artistName.toLowerCase() ,
            fb = b.artistName.toLowerCase() ;  
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
      });
    }
    else
    {
      list.sort((a:any, b:any) => {
        let fa = a.artistName.toLowerCase() ,
            fb = b.artistName.toLowerCase() ;  
        if (fa > fb) {
            return -1;
        }
        if (fa < fb) {
            return 1;
        }
        return 0;
      });
    }
    return list;
  }
  
}
