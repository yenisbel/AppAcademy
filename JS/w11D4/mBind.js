








// heck this on the other two style in JS(call and apply)
// apply dont take arguments
Function.prototype.myBind = function (context) {
    return() => this.apply(context)
};


// Example
class Lamp {
    constructor() {
      this.name = "Big lamp";
    }
    // this will go on the Lamp.prototype, means that myLamp__proto__ will be === to Lamp prototype
    turnOn() {
        console.log(`Turning on the ${this.name} lights for the bedroom`);
    };
  }
  
  const myLamp = new Lamp('Red');
  setTimeout(myLamp.turnOn.myBind(myLamp), 5000)
  

  