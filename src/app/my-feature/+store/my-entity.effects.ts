import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {MyEntityActions} from './my-entity.actions';

@Injectable()
export class MyEntityEffects {

  loadMyEntities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MyEntityActions.searchMyEntities),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MyEntityActions.searchMyEntitiesSuccess({data})),
          catchError(error => of(MyEntityActions.searchMyEntitiesFailure({error}))))
      )
    );
  });

  constructor(private actions$: Actions) {
  }
}
