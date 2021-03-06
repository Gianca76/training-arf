import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { COMPONENTS } from './index';
import { Chapter6CvaModule } from '../ch6-custom-form-controls-cva/chapter6-cva.module';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    Chapter6CvaModule
  ]
})
export class Chapter3SplitInComponentsWithCVAModule {

}
