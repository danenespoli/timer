import { Component, OnInit } from '@angular/core';
import { formatted } from 'scramble-generator';

@Component({
  selector: 'app-timer-viewer',
  templateUrl: './timer-viewer.component.html',
  styleUrls: ['./timer-viewer.component.scss']
})
export class TimerViewerComponent implements OnInit {

  times: string[] = [];
  scramble: string;

  constructor() { }

  ngOnInit() {
    this.scramble = formatted({ cubeSize: 3 });
  }

  onTime(time) {
    this.times.push(time);
    this.scramble = formatted({ cubeSize: 3 });
  }

}
