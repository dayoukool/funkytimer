import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  myTime: number;
  private myInitialTime: number;
  audio: any;
  running: boolean;
  increment: boolean;
  doWarn: boolean;
  hours: number;
  min: number;
  sec: number;
  warn: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.audio = new Audio();
    this.audio.loop = true;
    this.audio.src = 'assets/MCHammer.mp3';
    this.route.queryParams.subscribe(params => console.log(params));
    // this.audio.src = 'https://soundcloud.com/justin-williams-111/you-cant-touch-this';
  }

  ngOnInit() {
    this.running = false;
    this.increment = false;
    this.doWarn = false;
    this.myTime = 180;
    this.myInitialTime = 180;
    this.warn = 10;
    const timer = interval(500);
    timer.subscribe(t => {
      this.ticTac();
    });
  }
  login(){
    console.log('login');
    document.location.href = 'http://www.funkytimer.tk/login';
  }
  getHMS() {
    return new Date(this.myTime * 1000).toISOString().substr(11, 8).split(':');
  }
  reinit() {
    this.myTime = this.myInitialTime;
    this.doWarn = false;
    this.audio.load();
    // tslint:disable-next-line:curly
    if (this.running === true) this.audio.play();
  }

  start() {
    this.running = true;
    this.audio.play();
  }

  stop() {
    this.running = false;
    this.audio.pause();
  }
  dring() {
    this.stop();
    this.running = false;
    setTimeout(() => {
      this.reinit();
    }, 5000);
  }

  ticTac() {
    if (this.running === true) {
      if (this.increment) {
        this.myTime++;
      } else {
        this.myTime -= 0.5;
        if (this.myTime <= this.warn) {
          this.doWarn = !this.doWarn;
        }
        if (this.myTime === 0) {
          this.dring();
        }
      }
    }
  }
  updateHours(val) {
    this.hours = val;
    this.updateMyInitialTime();
  }
  updateMin(val) {
    this.min = val;
    this.updateMyInitialTime();
  }
  updateSec(val) {
    this.sec = val;
    this.updateMyInitialTime();
  }
  updateMyInitialTime() {
    // tslint:disable-next-line:whitespace
    this.myInitialTime = Number(this.hours | 0) * 3600 + Number(this.min | 0) * 60 + Number(this.sec | 0);
    this.myTime = this.myInitialTime;
  }
}

