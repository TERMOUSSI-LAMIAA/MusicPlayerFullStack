import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../../../core/services/album.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MusicPlayerComponent } from '../../../songs/components/music-player/music-player.component';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;  // Store album details including songs
  http: any;
  selectedSongId: string | undefined;


  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.loadAlbumDetails(albumId);
    }
  }

  loadAlbumDetails(id: string): void {
    this.albumService.getAlbumById(id).subscribe(
      (album) => {
        console.log('Album Details:', album);
        this.album = album;
      },
      (error) => {
        console.error('Error fetching album details:', error);
      }
    );
  }

  playSong(songId: string) {
    this.router.navigate(['/player'], {
      queryParams: {
        songId: songId,
        albumId: this.album.id
      }
    });
  }

  goBack(): void {
    window.history.back();
  }
}
