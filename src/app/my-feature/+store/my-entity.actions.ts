import { createActionGroup, props } from '@ngrx/store';

import { MyEntity } from './my-entity.model';

export const MyEntityActions = createActionGroup({
  source: 'MyEntity/API',
  events: {
    'Search MyEntities': props<{ query: string }>(),
    'Search MyEntities Success': props<{ data: MyEntity }>(),
    'Search MyEntities Failure': props<{ error: string }>(),
  }
});
