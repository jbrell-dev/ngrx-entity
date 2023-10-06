import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MyEntityEffects } from './my-entity.effects';

describe('MyEntityEffects', () => {
  let actions$: Observable<any>;
  let effects: MyEntityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyEntityEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MyEntityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
