import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { LandingComponent } from './landing/landing.component';
import { PlayerComponent } from './player/player.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { YonetimComponent } from './yonetim/yonetim.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EtkinliklerComponent } from './etkinlikler/etkinlikler.component';
import { PlayersForYearComponent } from './player/players-for-year/players-for-year.component';
import { SingleEtkinlikPageComponent } from './etkinlikler/single-etkinlik-page/single-etkinlik-page.component';
import { BeslenmeComponent } from './beslenme/beslenme.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ActivitiesComponent } from './admin-panel/activities/activities.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        LandingComponent,
        PlayerComponent,
        AboutUsComponent,
        YonetimComponent,
        GalleryComponent,
        EtkinliklerComponent,
        PlayersForYearComponent,
        SingleEtkinlikPageComponent,
        BeslenmeComponent,
        AdminPanelComponent,
        ActivitiesComponent,
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
