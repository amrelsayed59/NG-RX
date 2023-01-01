import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import {  } from './components';
import { AuthLayoutComponent } from './layouts';

const components = [
  AuthLayoutComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class LayoutModule { }
