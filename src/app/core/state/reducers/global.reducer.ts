import { createReducer, on } from '@ngrx/store';
import { GlobalActions } from './global.actions';

export const globalFeatureKey = 'global';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
);

