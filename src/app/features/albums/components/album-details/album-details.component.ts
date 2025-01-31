import { Component } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../../../core/services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})
export class AlbumDetailsComponent {
  album: Album | undefined;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    }
  }
}
