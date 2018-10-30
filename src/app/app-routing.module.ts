import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./data/page-not-found/page-not-found.component";
import { UserComponent } from "./data/user/user.component";
import { AdminComponent } from "./data/admin/admin.component";
import { ChartComponent } from './data/chart/chart.component';


// const routes: Routes = [
//   {path: '', redirectTo:'/login', pathMatch:'full'},
//   {path: 'login', component:LoginComponent},
//   {path: 'dashboard', component:DashboardComponent},
//   {path: 'chart', component:ChartComponent},
//   {path: '**', redirectTo:'/login'},
// ]

const appRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    component: AdminComponent,
    outlet: 'popup'
  },
  {
    path: 'chart',
    component: ChartComponent,
    outlet: 'popup'
  },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
  //   canLoad: [AuthGuard]
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: './crisis-center/crisis-center.module#CrisisCenterModule',
  //   data: { preload: true }
  // },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
