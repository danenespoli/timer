import { Component, OnInit, AfterViewChecked, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { DialogsService } from '../services/dialog.service';
import { TimeInfoDialog } from '../dialogs/time-info-dialog.component';
import { Time } from '../time';
import { formatted } from 'scramble-generator';

@Component({
  selector: 'app-timer-viewer',
  templateUrl: './timer-viewer.component.html',
  styleUrls: ['./timer-viewer.component.scss']
})
export class TimerViewerComponent implements OnInit, AfterViewChecked {

  times: Time[] = [];
  scramble: string;
  cubeSize: number = 3;
  @ViewChild('timesList') timesList;

  constructor(
    private dialogsService: DialogsService,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  getScramble(): string {
    return formatted({ cubeSize: this.cubeSize });
  }

  ngOnInit() {
    this.scramble = this.getScramble();
    this.changeDetectorRef.detectChanges();
    this.timesList.nativeElement.scrollTop = this.timesList.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {

  }

  onTime(time) {
    this.times.push(new Time(time, this.scramble));
    this.scramble = this.getScramble();
    this.changeDetectorRef.detectChanges();
    this.timesList.nativeElement.scrollTop = this.timesList.nativeElement.scrollHeight;
  }

  deleteTime(time) {
    this.times.splice(this.times.indexOf(time), 1);
  }

  deleteAll() {
    this.times = [];
  }

  openInfoDialog(time) {
    this.dialogsService
      .timeInfo(time.scramble, this.viewContainerRef);
  }

}
