import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InsightsComponent } from './insights/insights.component';
import { ContactComponent } from './contact/contact.component';
import { PoliciesComponent } from './policies/policies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { OpenSourceBankingComponent } from './open-source-banking/open-source-banking.component';
import { FrontEndAutomationComponent } from './front-end-automation/front-end-automation.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'insights', component: InsightsComponent },
  { path: 'contact', component: ComingSoonComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'community-projects', component: ComingSoonComponent },
  { path: 'open-source-banking', component: OpenSourceBankingComponent },
  { path: 'front-end-testing-automation', component: FrontEndAutomationComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
