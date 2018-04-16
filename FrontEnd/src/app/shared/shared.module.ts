import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppSettings } from './services/app-settings/app-settings';
@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [],
  exports: [
    RouterModule,
    NgbModule
  ],
  providers: [
    AppSettings
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule
    };
}
}
