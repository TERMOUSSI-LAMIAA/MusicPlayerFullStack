import { createReducer, on } from '@ngrx/store';
import { AlbumsActions } from './albums.actions';

export const albumsFeatureKey = 'albums';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

