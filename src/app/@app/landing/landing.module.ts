import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { reducers } from 'app/@store/store';
import { LandingRoutingModule, COMPONENTS } from './landing-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffect } from 'app/@store/effects/todo.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    LandingRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffect]),
    TranslateModule,
  ],
  providers: [],
})
export class LandingModule {}
