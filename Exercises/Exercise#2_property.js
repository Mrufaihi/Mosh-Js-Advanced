// Stopwatch App

// TURN ALL FUNCTIONS INSIDE THIS CONSTRUCTOR FROM INSTANCE MEMEBERS -> Prototype Members.

function StopWatch() {
    //ReferenceError: running is not defined | this is only accesible within constructor.(private) | make them public using a getter.
    let startTime = 0;
    let endTime = 0;
    let running = false;
    let duration = 0;

    // turn all vars into getter to access them in Prototype
    // (target object, define property, modification )

    Object.defineProperties(this, {
        //property #1
        'startTime': {
            get: function () {
                return startTime; //=> we do not need this.var 
            },
            set: function (value) {
                startTime = value; //=> we do not need this.var 
            }
        },
        //property #2
        'endTime': {
            get: function () {
                return endTime; //=> we do not need this.var 
            },
            set: function (value) {
                endTime = value; //=> we do not need this.var 
            }
        },
        //property #3
        'running': {
            get: function () {
                return running; //=> we do not need this.var 
            },
            set: function (value) {
                running = value; //=> we do not need this.var 
            }
        },
        //property #4
        'duration': {
            get: function () {
                return duration; //=> we do not need this.var 
            },
            set: function (value) {
                duration = value; //=> we do not need this.var 
            }
        },
    })
}


// NEEDS TO BE OUTSIDE CONSTRUCTOR FOR OPTIMIZATION// 
//#1DONE
StopWatch.prototype.startTimer = function () {
    //check if timer already started?
    if (this.running === true) //TODO: we need getter to public access
        throw new Error('Already running');

    this.running = true; //TODO: we need Setter to change value
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
    this.duration += seconds; //we return value in this._duration
}
//#3DONE
StopWatch.prototype.reset = function () {
    // reset values to original state
    this.startTime = 0;
    this.endTime = 0;
    this.running = false;
    this.duration = 0;
}

const sw = new StopWatch();

