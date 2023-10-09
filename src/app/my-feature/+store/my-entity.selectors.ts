import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  myEntitiesFeature,
  MyEntitiesFeatureState,
  selectAll,
  selectEntities,
} from './my-entity.reducer';
import { MyEntity } from './my-entity.model';

export const selectMyFeatureState =
  createFeatureSelector<MyEntitiesFeatureState>(myEntitiesFeature.name);

export const selectEntityWithBuiltinSelectors = (userInput: string) =>
  createSelector(selectMyFeatureState, (state): MyEntity | undefined => {
    const id = Number(userInput);
    const nameToLowerCase = userInput.toLowerCase();
    return isNaN(id)
      ? selectAll(state).find(
          (entity) => entity.name.toLowerCase() === nameToLowerCase,
        )
      : selectEntities(state)[id];
  });

export const selectEntityWithWorkaround = (userInput: string) =>
  createSelector(selectMyFeatureState, (state): MyEntity | undefined => {
    const id = Number(userInput);
    const nameToLowerCase = userInput.toLowerCase();
    return isNaN(id)
      ? Object.values(state.entities).find(
          (entity: MyEntity | undefined) =>
            entity?.name.toLowerCase() === nameToLowerCase,
        )
      : state.entities[id];
  });
