import { BrowserModule, Title  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { SDKBrowserModule } from './shared/sdk/index';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RoutesModule,
    SharedModule.forRoot(),
    SDKBrowserModule.forRoot(),
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
