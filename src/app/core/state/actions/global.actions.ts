import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const GlobalActions = createActionGroup({
  source: 'Global',
  events: {
    'Load Globals': emptyProps(),
    'Load Globals Success': props<{ data: unknown }>(),
    'Load Globals Failure': props<{ error: unknown }>(),
  }
});
