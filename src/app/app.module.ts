import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalloutComponent } from './callout/callout.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { WhyChUsComponent } from './why-ch-us/why-ch-us.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { PackagesWeProvideComponent } from './packages-we-provide/packages-we-provide.component';
import { ServicePageComponent } from './service-page/service-page.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'service', component: ServicePageComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AppointmentComponent,
    CalloutComponent,
    FooterComponent,
    ServicesComponent,
    WhyChUsComponent,
    TabContentComponent,
    HomeComponent,
    AboutComponent,
    WhatWeDoComponent,
    PackagesWeProvideComponent,
    ServicePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
