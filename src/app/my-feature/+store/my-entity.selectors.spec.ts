import {
  adapter,
  myEntitiesFeature,
  MyEntitiesFeatureState,
} from './my-entity.reducer';
import { MyEntity } from './my-entity.model';
import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import {
  selectMyFeatureState,
  selectEntityWithBuiltinSelectors,
  selectEntityWithWorkaround,
} from './my-entity.selectors';

describe('Selectors', () => {
  let mockEntity: MyEntity;
  let featureState: MyEntitiesFeatureState;
  let rootState: { [myEntitiesFeature.name]: MyEntitiesFeatureState };
  beforeEach(() => {
    mockEntity = { id: 5, name: 'foo' };
    featureState = {
      entities: { [mockEntity.id]: mockEntity },
      ids: [mockEntity.id],
      isLoading: false,
      searchResult: null,
      errorMessage: '',
    };
    rootState = { [myEntitiesFeature.name]: featureState };
  });
  describe('selectMyFeatureState', () => {
    it('should select the feature state', () => {
      const result = selectMyFeatureState(rootState);
      expect(result).toEqual(featureState);
    });
  });
  describe('selectEntityWithWorkaround(userInput)', () => {
    it('should return a single entity', () => {
      const result = selectEntityWithWorkaround(mockEntity.name).projector(
        featureState,
      );
      expect(result).toEqual(mockEntity);
    });
  });
  describe('selectEntityWithBuiltinSelectors(userInput)', () => {
    it('should at least reach the expect case', () => {
      const result = selectEntityWithBuiltinSelectors(
        mockEntity.name,
      ).projector(featureState);
      expect(result).toBe(result);
    });
    it('also fails when using the adapter to add the mock entity', () => {
      featureState = adapter.getInitialState({
        isLoading: false,
        searchResult: null,
        errorMessage: '',
      });
      rootState = { [myEntitiesFeature.name]: featureState };
      TestBed.configureTestingModule({
        providers: [provideMockStore({ initialState: rootState })],
      });
      adapter.setOne(mockEntity, featureState);
      const result = selectEntityWithBuiltinSelectors(
        mockEntity.name,
      ).projector(featureState);
      expect(result).toBe(result);
    });
  });
});
