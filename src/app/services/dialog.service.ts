import { Observable } from 'rxjs/Rx';
import { TimeInfoDialogComponent } from '../time-info-dialog/time-info-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public timeInfo(scramble: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<TimeInfoDialogComponent>;
        const config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(TimeInfoDialogComponent, config);

        dialogRef.componentInstance.scramble = scramble;

        return dialogRef.afterClosed();
    }
}