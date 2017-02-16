import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { DialogsService } from './services/dialog.service';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerViewerComponent } from './timer-viewer/timer-viewer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { TimeInfoDialog } from './dialogs/time-info-dialog.component';

@NgModule({
  entryComponents: [
    TimeInfoDialog
  ],
  declarations: [
    AppComponent,
    TimerComponent,
    TimerViewerComponent,
    MenuBarComponent,
    TimeInfoDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    DialogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
