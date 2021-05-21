import { valida } from './validadores/validaData';
import { sepultado } from './models/sepultado';
import { jazigo } from './models/jazigo';
import { cemiterio } from './models/cemiterio';
import { LoginPage } from './login/login.page';
import { LoginPageModule } from './login/login.module';
import { Setup } from 'src/app/setup';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { LocationPage } from './location/location.page';
import { LocationPageModule } from './location/location.module';

import { Geolocation } from '@ionic-native/geolocation/ngx';
   
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [HomePage, LocationPage],
<<<<<<< HEAD
  imports: [HomePageModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,LocationPageModule,IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, Geolocation, 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
=======
  imports: [HomePageModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,LocationPageModule,IonicStorageModule.forRoot(),HttpClientModule, ReactiveFormsModule,FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, Geolocation,SplashScreen,StatusBar,Setup,LoginPage,cemiterio,jazigo,sepultado,valida
>>>>>>> bd1b37d83bfdb30f4cda256e1370300e66c96387
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
