import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ContainerComponent } from './container/container.component';
import { View01Component } from './view01/view01.component';
import { View02Component } from './view02/view02.component';
import { View03Component } from './view03/view03.component';

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent, ContainerComponent, View01Component, View02Component, View03Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
