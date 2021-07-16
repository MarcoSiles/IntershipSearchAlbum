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
    console.log(this.nameFiltered);
  }
}
