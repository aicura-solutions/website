import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AicuraLogoOrangeComponent } from './aicura-logo-orange/aicura-logo-orange.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AicuraLogoWhiteComponent } from './aicura-logo-white/aicura-logo-white.component';
import { InsightsComponent } from './insights/insights.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PoliciesComponent } from './policies/policies.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { OpenSourceBankingComponent } from './open-source-banking/open-source-banking.component';
import { FrontEndAutomationComponent } from './front-end-automation/front-end-automation.component';
import { NavigationToggleComponent } from './navigation-toggle/navigation-toggle.component';
import { NavigationToggleWhiteComponent } from './navigation-toggle-white/navigation-toggle-white.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AicuraLogoOrangeComponent,
    FooterComponent,
    HomePageComponent,
    AicuraLogoWhiteComponent,
    InsightsComponent,
    PageNotFoundComponent,
    ContactComponent,
    PoliciesComponent,
    ComingSoonComponent,
    OpenSourceBankingComponent,
    FrontEndAutomationComponent,
    NavigationToggleComponent,
    NavigationToggleWhiteComponent,
    AboutUsPageComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
