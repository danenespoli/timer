import { Component, OnInit, AfterViewChecked, ViewChild, ViewContainerRef } from '@angular/core';
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
    private viewContainerRef: ViewContainerRef
  ) { }

  getScramble(): string {
    return formatted({ cubeSize: this.cubeSize });
  }

  ngOnInit() {
    this.scramble = this.getScramble();
  }

  ngAfterViewChecked() {
    this.timesList.nativeElement.scrollTop = this.timesList.nativeElement.scrollHeight;
  }

  onTime(time) {
    this.times.push(new Time(time, this.scramble));
    console.log(this.timesList.nativeElement.scrollHeight);
    console.log(this.timesList.nativeElement.scrollTop + '\n');
    this.scramble = this.getScramble();
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
