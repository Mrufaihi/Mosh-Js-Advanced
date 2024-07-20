// Stopwatch App

// TURN ALL FUNCTIONS INSIDE THIS CONSTRUCTOR FROM INSTANCE MEMEBERS -> Prototype Members.

function StopWatch() {
    //ReferenceError: running is not defined | this is only accesible within constructor.(private)
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this._duration = 0;

    // turn _duration() into getter 
    // (target object, define property, modification )

    Object.defineProperties(this, {
        //property #1
        'startTime': {
            configurable: true,
            writable: true
        },
        //property #2
        'endTime': {
            writable: true
        },
        //property #3
        'running': {
            writable: true
        },
        //property #4
        'duration': {
            get: function () {
                return this._duration; //=> this. here is accessing the get 'duration' property. we gotta change name of variable duration -> _duration & => fun
            },
        },
    });
}

// NEEDS TO BE OUTSIDE CONSTRUCTOR FOR OPTIMIZATION//
//#1DONE
StopWatch.prototype.startTimer = function () {
    //check if timer already started?
    if (this.running === true)
        throw new Error('Already running');

    this.running = true;
    this.startTime = new Date(); //get current time in ms
}
//#2DONE
StopWatch.prototype.stopTimer = function () {
    //check if timer already stopped?
    if (this.running === false)
        throw new Error('Already stopped');

    this.running = false;
    this.endTime = new Date(); //get current time in ms

    // once timer is stopped, calculate _duration in seconds
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000; // /1000 cuz its in mS
    this._duration += seconds; //we return value in this._duration
}
//#3DONE
StopWatch.prototype.reset = function () {
    // reset values to original state
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this._duration = 0;
}

const sw = new StopWatch();
