import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  private _ticks: number = 0;
  private _timer: Subscription;
  private _timing: Boolean = false;
  private _ready: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(event) {
    if (this._timing) {
      this._timing = false;
      this._ready = false;
      this._timer.unsubscribe();
    } else {
      if (event.key === ' ') {
        console.log('keyCode');
        this._ready = true;
      }
    }
  }

  onKeyUp(event) {
    if (event.key === ' ' && this._ready) {
      this._timing = true;
      this._timer = Observable.timer(0, 10).subscribe(time => {
        if (this._timing) {
          console.log(time);
          this._ticks = time / 100;
          console.log(this._ticks);
        }
      });
    }
  }

}
