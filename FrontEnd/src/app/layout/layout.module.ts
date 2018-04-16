import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
    declarations: [
      NavbarComponent, 
      LayoutComponent
    ],
    exports: [
      NavbarComponent, 
      LayoutComponent
    ]
})
export class LayoutModule { }
