// 2 CONSTRUCTORS : #1 HtmlElement #2 HTML SELECT ELEMENT .
// HTML SELECT  ELEMENT INHRITS HTML ELEMENT 'INSTANCE'.

function HtmlElement() {
    this.click = function () {
        console.log('clicking..')
    };
}

// added method to prototype(Parent) of HtmlElement
HtmlElement.prototype.focus = function () {
    console.log('focusing..')
}
// HtmlElement.prototype.click = function () {
//     console.log('clicking..')
// }

const e = new HtmlElement();

// we want to add inheritence from  HtmlElement 'Instance' into this constructor 
function HtmlSelectElement() {
    this.items = [];

    this.addItem = function (item) {
        this.items.push(item)
    };
    this.removeItem = function (item) {
        // in array items, get index of (item)
        const index = this.items.indexOf(item);
        this.items.splice(index, 1)

    };
}

// set HtmlSelectElement.prototype to new instance of HtmlElement and its prototype.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; //dont forget to reset constructor.
// --- //

// extend function for cleaner code to reset prototype
// function extend(child, parent) {
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }
// extend(HtmlSelectElement, HtmlElement);

const s = new HtmlSelectElement();
