import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { OurApprouchComponentComponent } from './our-approuch-component/our-approuch-component.component';
import { OurServiceComponentComponent } from './our-service-component/our-service-component.component';
import { TeamComponentComponent } from './team-component/team-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LandingComponentComponent,
    AboutComponentComponent,
    OurApprouchComponentComponent,
    OurServiceComponentComponent,
    TeamComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
