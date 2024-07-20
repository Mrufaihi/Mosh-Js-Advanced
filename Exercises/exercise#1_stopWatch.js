// Stopwatch app

//Constructor Fun

function StopWatch() {
    let startTime, running, endTime, duration = 0;

    this.startTimer = () => {
        //check if timer already started?
        if (running === true)
            throw new Error('Already running');

        running = true;
        startTime = new Date(); //get current time in ms
    };
    this.stopTimer = function () {
        //check if timer already stopped?
        if (running === false)
            throw new Error('Already stopped');

        running = false;
        endTime = new Date(); //get current time in ms

        // once timer is stopped, calculate duration in seconds
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // /1000 cuz its in mS
        duration += seconds; //we return value in this.duration
    };
    this.reset = function () {
        // reset values to original state
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    // turn duration() into getter 
    // (target object, define property, modification )
    Object.defineProperty(this, 'duration', {
        get: function () {
            return `duration: ${duration}s`;
        }
    });
}

const sw = new StopWatch();
//TODO: WE CANNOT EXCUTE HERE | the envirnoment here doesnt allow delay unless specified//
// console.log(sw.startTimer()) //WE CANNOT EXCUTE HERE | the envirnoment here doesnt allow delay unless specified//
// console.log(sw.stopTimer())
// console.log(sw.duration())

