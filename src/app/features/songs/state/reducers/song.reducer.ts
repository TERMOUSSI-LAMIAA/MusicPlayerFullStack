// import { createReducer, on } from "@ngrx/store";
// import { Song } from "../../models/song.model";
// import * as SongActions from '../actions/song.actions';

// export interface SongState {
//     currentSong: Song | null;
//     loading: boolean;
//     error: string | null;
// }

// export const initialState: SongState = {
//     currentSong: null,
//     loading: false,
//     error: null
// };

// export const songReducer = createReducer(
//     initialState,
//     on(SongActions.loadSongDetails, state => ({
//         ...state,
//         loading: true,
//         error: null
//     })),
//     on(SongActions.loadSongDetailsSuccess, (state, { song }) => ({
//         ...state,
//         currentSong: song,
//         loading: false,
//         error: null
//     })),
//     on(SongActions.loadSongDetailsFailure, (state, { error }) => ({
//         ...state,
//         loading: false,
//         error
//     }))
// );