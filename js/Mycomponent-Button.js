var components;
(function (components) {
    class MyButton extends HTMLElement {        

        constructor() {
            super();                                    
        }

        connectedCallback() {
            this.DOMElement = document.createElement("BUTTON");
            this.DOMElement.innerHTML = this.innerHTML != "" ?  this.innerHTML : "Click Me!";
            this.DOMElement.setAttribute("class", "btn");
            this.appendChild(this.DOMElement);
            this.DOMElement.addEventListener('click', e => this.clickEvent());            
        }

        clickEvent() {
            alert("Hello World");
        }
    }
    components.MyButton = MyButton;
    // Register component
    window["customElements"].define("my-button", MyButton);
})(components || (components = {}));