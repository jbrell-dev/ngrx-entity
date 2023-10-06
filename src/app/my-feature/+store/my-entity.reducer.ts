import {createFeature, createReducer, on} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {MyEntity} from './my-entity.model';
import {MyEntityActions} from './my-entity.actions';

export const myEntitiesFeatureKey = 'myEntities';

export interface State extends EntityState<MyEntity> {
  isLoading: boolean,
  searchResult: MyEntity | null,
  errorMessage: string,
}

export const adapter: EntityAdapter<MyEntity> = createEntityAdapter<MyEntity>();

export const initialState: State = adapter.getInitialState({
  isLoading: false,
  searchResult: null,
  errorMessage: '',
});

export const reducer = createReducer(
  initialState,
  on(MyEntityActions.searchMyEntitiesSuccess,
    (state, action) => adapter.setOne(action.data, state)
  ),
);

export const myEntitiesFeature = createFeature({
  name: myEntitiesFeatureKey,
  reducer,
  extraSelectors: ({selectMyEntitiesState}) => ({
    ...adapter.getSelectors(selectMyEntitiesState)
  }),
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = myEntitiesFeature;
