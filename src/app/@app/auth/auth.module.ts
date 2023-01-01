import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthRoutingModule, COMPONENTS } from './auth-routing.module';

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
  ],
  providers: [],
})
export class AuthModule { }
