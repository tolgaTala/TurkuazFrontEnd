import { NgModule } from '@angular/core';
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
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
