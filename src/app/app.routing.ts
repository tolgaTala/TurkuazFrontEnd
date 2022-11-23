import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './components/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PlayerComponent } from './components/player/player.component';
import { YonetimComponent } from './components/yonetim/yonetim.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EtkinliklerComponent } from './components/etkinlikler/etkinlikler.component';
import { PlayersForYearComponent } from './components/player/players-for-year/players-for-year.component';
import { SingleEtkinlikPageComponent } from './components/etkinlikler/single-etkinlik-page/single-etkinlik-page.component';
import { BeslenmeComponent } from './components/beslenme/beslenme.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ActivitiesComponent } from './components/admin-panel/activities/activities.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'about-us',         component: AboutUsComponent },
    { path: 'players',         component: PlayerComponent },
    { path: 'playersforyear',         component: PlayersForYearComponent },
    { path: 'yonetim',         component: YonetimComponent },
    { path: 'gallery',         component: GalleryComponent },
    { path: 'etkinlikler',         component: EtkinliklerComponent },
    { path: 'etkinlik',         component: SingleEtkinlikPageComponent },
    { path: 'beslenme',         component: BeslenmeComponent },
    { path: 'admin',         component: AdminPanelComponent , children:[
        {path:'admietkinlikler',   component: ActivitiesComponent},
    ] },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration:'enabled',
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
