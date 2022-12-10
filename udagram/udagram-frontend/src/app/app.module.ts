import { NgModule , CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenubarComponent } from './menubar/menubar.component';

import { AuthModule } from './auth/auth.module';
import { ApiService } from './api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
  ],
  entryComponents: [],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   AuthModule,
  //   IonicModule.forRoot(),

  // ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    IonicModule.forRoot()
  ],
  providers: [
    ApiService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [
  NO_ERRORS_SCHEMA]
})
export class AppModule {}
