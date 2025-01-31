import { Routes } from '@angular/router';
import { AlbumListComponent } from './features/albums/components/album-list/album-list.component';
import { AlbumDetailsComponent } from './features/albums/components/album-details/album-details.component';
import { AlbumCreateComponent } from './features/albums/components/album-create/album-create.component';
import { AlbumUpdateComponent } from './features/albums/components/album-update/album-update.component';
import { AlbumSearchFilterComponent } from './features/albums/components/album-search-filter/album-search-filter.component';
import { LoginComponent } from './features/users/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'albums',
        component: AlbumListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/albums',
        pathMatch: 'full'
    }
];
