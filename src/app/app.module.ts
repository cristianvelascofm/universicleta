import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModulesModule } from './material-modules/material-modules.module';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainModuleComponent } from './components/main-module/main-module.component';
import { NotificationDialogComponent } from './dialogs/notification-dialog/notification-dialog.component';
import { SpinnerComponent } from './environment/utilities/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';
import { HowToUsePageComponent } from './components/how-to-use-page/how-to-use-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { EntregaPageComponent } from './components/entrega-page/entrega-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    MainModuleComponent,
    NotificationDialogComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    RegisterPageComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    HowToUsePageComponent,
    ReservationPageComponent,
    EntregaPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
