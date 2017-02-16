import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-time-info-dialog',
  templateUrl: './time-info-dialog.component.html',
  styleUrls: ['./time-info-dialog.component.scss']
})
export class TimeInfoDialogComponent implements OnInit {

  scramble: string;

  constructor(
    public dialogRef: MdDialogRef<TimeInfoDialogComponent>
  ) { }

  ngOnInit() {
  }

}
