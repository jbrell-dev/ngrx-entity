import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMyEntity from './+store/my-entity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyEntityEffects } from './+store/my-entity.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMyEntity.myEntitiesFeatureKey, fromMyEntity.reducer),
    EffectsModule.forFeature([MyEntityEffects])
  ]
})
export class MyFeatureModule {
}
