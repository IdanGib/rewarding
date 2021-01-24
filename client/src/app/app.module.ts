import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { SettingsComponent } from './screens/settings/settings.component';
import { KidComponent } from './screens/kid/kid.component';
import { SummaryComponent } from './screens/summary/summary.component';
import {AppService } from 'src/app/app.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditGiftsComponent } from './edit-dialog/edit-gifts/edit-gifts.component';
import { EditKidsComponent } from './edit-dialog/edit-kids/edit-kids.component';
import { EditProfileComponent } from './edit-dialog/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    KidComponent,
    SummaryComponent,
    EditDialogComponent,
    EditGiftsComponent,
    EditKidsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private app: AppService) {
    this.app.init();
  }
}
