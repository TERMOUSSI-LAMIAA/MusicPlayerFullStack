import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';



@Injectable()
export class GlobalEffects {


  constructor(private actions$: Actions) {}
}
