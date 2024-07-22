//Stack app
const _stackArr = new WeakMap()

class Stack {
    constructor() {
        _stackArr.set(this, []); //set value of private Weakmap const
    }

    get count() {
        return _stackArr.get(this).length // count read only returns length of STACK
    }
    peek() {
        const sArray = _stackArr.get(this); //simplified '_stackArr.get(this)' which just returns the array
        if (sArray.length <= 0)
            throw new Error('stack empty');
        return sArray[sArray.length - 1]; //return top element in stack
    }
    pop() {
        const sArray = _stackArr.get(this);
        if (sArray.length <= 0)
            throw new Error('stack empty');
        return sArray.pop(); //remove top element and return it
    }
    push(e) {
        _stackArr.get(this).push(e); //add element to stack 
    }
}


const s = new Stack();
