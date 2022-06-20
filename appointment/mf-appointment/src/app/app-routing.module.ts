import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { View01Component } from './view01/view01.component';
import { View02Component } from './view02/view02.component';
import { View03Component } from './view03/view03.component';

const routes: Routes = [
  {
    path: 'appointment',
    component: ContainerComponent,
    children: [
      { path: 'view01', component: View01Component },
      { path: 'view02', component: View02Component },
      { path: 'view03', component: View03Component },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
