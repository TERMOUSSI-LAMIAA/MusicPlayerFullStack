import { Routes } from '@angular/router';
import { AlbumListComponent } from './features/albums/components/album-list/album-list.component';
import { AlbumDetailsComponent } from './features/albums/components/album-details/album-details.component';

import { AlbumSearchFilterComponent } from './features/albums/components/album-search-filter/album-search-filter.component';
import { LoginComponent } from './features/users/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MusicPlayerComponent } from './features/songs/components/music-player/music-player.component';
import { RegisterComponent } from './features/users/components/register/register.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'albums',
        component: AlbumListComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: '',
    //     redirectTo: '/albums',
    //     pathMatch: 'full'
    // },
    { path: 'albums/:id', component: AlbumDetailsComponent },
    { path: 'player', component: MusicPlayerComponent }
];
