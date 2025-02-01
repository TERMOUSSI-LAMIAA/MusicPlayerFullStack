import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../../../core/services/album.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  providers: [AlbumService],
  templateUrl: './album-list.component.html',
  styleUrl: './album-list.component.scss'
})
export class AlbumListComponent implements OnInit {
  albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe(
      (albums) => {
        console.log(albums)
        this.albums = albums;
      },
      (error) => {
        console.error('Error fetching albums:', error);
      }
    );
  }

  viewAlbum(id: string): void {
    this.router.navigate(['/albums', id]);
  }

 
}
