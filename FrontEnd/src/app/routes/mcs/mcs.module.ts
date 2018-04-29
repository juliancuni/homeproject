import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McsComponent } from './mcs/mcs.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: McsComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    McsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class McsModule { }
