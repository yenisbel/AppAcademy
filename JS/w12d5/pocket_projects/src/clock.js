import { htmlGenerator } from "./warmup";

const clockId = document.getElementById('clock');

class Clock {
    constructor() {
        const date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        setInterval(test =>{
            this.tick();
            this.printTime();
        }, 1000);
    }

    printTime() {
        const timeString = `${this.hours}:${this.minutes}:${this.seconds}`;
        // debugger;
        htmlGenerator(timeString, clockId);
    }

    tick() {
        if (this.minutes === 59 && this.seconds === 59) {
            this.hours++;
        } else if (this.seconds === 59) {
            this.minutes++;
        }
        this.seconds++;
        this.seconds = this.seconds % 60;
        this.minutes = this.minutes % 60;
        this.hours = this.hours % 24;
      
    }
}

const clock = new Clock();
// clock.printTime()

