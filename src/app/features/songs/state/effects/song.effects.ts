// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, map, mergeMap, of } from "rxjs";
// import { SongService } from "../../../../core/services/song.service";
// import * as SongActions from '../actions/song.actions';


// @Injectable()
// export class SongEffects {
//     loadSongDetails$ = createEffect(() =>
//         this.actions$.pipe(
//             ofType(SongActions.loadSongDetails),
//             mergeMap(({ songId }) =>
//                 this.songService.getSongDetails(songId).pipe(
//                     map(song => SongActions.loadSongDetailsSuccess({ song })),
//                     catchError(error => of(SongActions.loadSongDetailsFailure({
//                         error: error.message || 'Failed to load song details'
//                     })))
//                 )
//             )
//         )
//     );

//     constructor(
//         private actions$: Actions,
//         private songService: SongService
//     ) { }
// }