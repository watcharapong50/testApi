import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { AdminComponent } from './data/admin/admin.component';
import { UserComponent } from './data/user/user.component';
import { MenubarUserComponent } from './data/menubar-user/menubar-user.component';
import { MenubarAdminComponent } from './data/menubar-admin/menubar-admin.component';
import { PageNotFoundComponent } from './data/page-not-found/page-not-found.component';
import { LoginComponent } from './data/login/login.component';
import { NavbarComponent } from './data/navbar/navbar.component';
import { FooterComponent } from './data/footer/footer.component';
import { SettingComponent } from './data/setting/setting.component';
import { ChartComponent } from './data/chart/chart.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";


import { MessageService } from './data/message.service';
import { HttpErrorHandler } from './data/http-error-handler.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '/login' },
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    MenubarUserComponent,
    MenubarAdminComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SettingComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'My-Xsrf-Cookie', headerName: 'My-Xsrf-Header', }),
    HttpModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
