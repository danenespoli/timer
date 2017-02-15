import { Component, OnInit } from '@angular/core';
import { Time } from '../time';
import { formatted } from 'scramble-generator';

@Component({
  selector: 'app-timer-viewer',
  templateUrl: './timer-viewer.component.html',
  styleUrls: ['./timer-viewer.component.scss']
})
export class TimerViewerComponent implements OnInit {

  times: Time[] = [];
  scramble: string;

  constructor() { }

  ngOnInit() {
    this.scramble = formatted({ cubeSize: 3 });
  }

  onTime(time) {
    this.times.push(new Time(time, this.scramble));
    this.scramble = formatted({ cubeSize: 3 });
  }

}
