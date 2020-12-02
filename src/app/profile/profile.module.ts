import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProfileService } from './services/profile.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [
        ProfileListComponent,
        ProfileDetailsComponent
    ],
    exports: [
        ProfileListComponent,
        ProfileDetailsComponent
    ],
    providers: [ProfileService]
})

export class ProfileModule { }