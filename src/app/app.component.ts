import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AlbumListComponent } from './features/albums/components/album-list/album-list.component';
import { AlbumDetailsComponent } from './features/albums/components/album-details/album-details.component';
import { AlbumCreateComponent } from './features/albums/components/album-create/album-create.component';
import { AlbumUpdateComponent } from './features/albums/components/album-update/album-update.component';
import { AlbumSearchFilterComponent } from './features/albums/components/album-search-filter/album-search-filter.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AlbumListComponent, AlbumDetailsComponent, AlbumCreateComponent, AlbumUpdateComponent, AlbumSearchFilterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FSMusicPlayer';
}
