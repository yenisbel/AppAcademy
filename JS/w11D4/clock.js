class Clock {
 
    constructor() {
       
        const dateObjTime = new Date();
       
        this.seconds = dateObjTime.getSeconds();
        this.minutes = dateObjTime.getMinutes();
        this.hours = dateObjTime.getHours();

        this.printTime();
        // setInterval(callback, delay[, ...args])
        setInterval(this._tick.bind(this), 3000)

    }
  
    printTime() {
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes += 1;    
      } else if(this.minutes === 60) {
        this.seconds = 0;
        this.minutes = 0; 
        this.hours += 1; 
      } 
      this.printTime();
    }
  }
  
  const clock = new Clock();

