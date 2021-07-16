import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from 'src/app/models/album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Album[]=[];
  nameFiltered = "";
  sortOrder:boolean=true;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public albumService: AlbumService
  ) { }

  async ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

  searchAuthos()
  {
    this.albums=this.albumService.getAlbum(this.nameFiltered);
  }

  sortAlbums()
  {
    this.sortOrder=!this.sortOrder;
    this.albumService.sortOrderAlbums(this.sortOrder);
  }


}
