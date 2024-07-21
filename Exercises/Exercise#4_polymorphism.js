// 2 CONSTRUCTORS : #1 HtmlElement #2 HTML SELECT ELEMENT .
// HTML SELECT  ELEMENT INHRITS HTML ELEMENT 'INSTANCE'.

//General Element
function HtmlElement() {
    this.click = function () {
        console.log('clicking..')
    };
}

// added method to prototype(Parent) of HtmlElement
HtmlElement.prototype.focus = function () {
    console.log('focusing..')
}

// Drop-down
function HtmlSelectElement(items = []) { //items default = []

    this.items = items;

    this.addItem = function (item) {
        this.items.push(item)
    };
    this.removeItem = function (item) {
        // in array items, get index of (item)
        const index = this.items.indexOf(item);
        this.items.splice(index, 1)
    };

    this.render = function () {
        //used templates `` for everything , ${} to seperate the methods.
        return `<select>
        ${this.items
                .map(item => `<option> ${item}</option>`)
                .join('\n')}
            </select>`
    }
}

// IMG
function HtmlImageElement(src = undefined) {
    this.src = src;
    // this.src.
    this.render = function () {
        return `<img src= "${this.src}" />` // no need for mapping, cause mapping needs an array
    }
}

// We want to add inheritence from  (HtmlElement 'Instance') into these constructors
// SET child.prototype to new instance of HtmlElement and its prototype.
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement; //dont forget to reset constructor.

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; //dont forget to reset constructor.

// *Vars objects*
const e = new HtmlElement();
const s = new HtmlSelectElement([1, 2, 3]);
const i = new HtmlImageElement('http//:google.com')

// POLYMORPHISM : Multiple Forms Of RENDER() from Same object.
const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('https/google.com'),
];
for (let element of elements)
    console.log(element.render())