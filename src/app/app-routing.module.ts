import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MeetTheTeamComponent } from './meet-the-team/meet-the-team.component';
import { InsightsComponent } from './insights/insights.component';
import { ContactComponent } from './contact/contact.component';
import { PoliciesComponent } from './policies/policies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'meet-the-team', component: ComingSoonComponent },
  { path: 'insights', component: ComingSoonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'community-projects', component: ComingSoonComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
