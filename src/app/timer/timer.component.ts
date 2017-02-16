import { Component, OnInit, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  animations: [
    trigger('timerState', [
      state('ready', style({
        fontSize: '145px',
        color: '#2fbc3f'
      })),
      state('idle', style({
        fontSize: '130px'
      })),
      transition('idle => ready', animate('350ms ease')),
      transition('ready => idle', animate('50ms ease-out'))
    ])
  ]
})
export class TimerComponent implements OnInit {

  private readonly KEYS = {
    SPACE: ' '
  };

  @Output() time = new EventEmitter<string>();

  private _ticks: string = '0.00';
  private _timer: Subscription;
  private _timing: Boolean = false;
  private _ready: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(event) {
    if (this._timing) {
      this._timing = false;
      this._timer.unsubscribe();
      this.time.emit(this._ticks);
    } else {
      if (event.key === this.KEYS.SPACE) {
        this._ready = true;
        this._ticks = '0.00';
      }
    }
  }

  onKeyUp(event) {
    if (event.key === this.KEYS.SPACE && this._ready) {
      this._timing = true;
      this._ready = false;
      this._timer = Observable.timer(0, 10).subscribe(time => {
        if (this._timing) {
          this._ticks = (time / 100).toFixed(2);
        }
      });
    }
  }

}
