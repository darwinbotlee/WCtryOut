var components;
(function (components) {
    class MyInput extends HTMLElement {        

        constructor() {
            super();                                    
        }

        connectedCallback() {
            this.DOMElement = document.createElement("input");
            this.DOMElement.setAttribute("type", "text");
            this.DOMElement.setAttribute("placeholder", this.attributes.getNamedItem("placeholder").value);
            this.DOMElement.setAttribute("class", "form-control");
            this.appendChild(this.DOMElement);
            this.DOMElement.addEventListener('keyup', e => this.validator(this.DOMElement.value));            
        }

        validator(val) {
            var vtype = this.attributes.getNamedItem("validator-type").value;
            switch (vtype) {
                case "N":
                    if (/\D/.test(val)) {
                        alert("Please only enter numeric values");
                        this.DOMElement.value = "";
                    }
                    break;
                case "A":
                    if (!/^[a-zA-Z]*$/.test(val)) {
                        alert("Please only enter Alphabetic values");
                        this.DOMElement.value = "";
                    }
                    break;
            }
            
        }
    }
    components.MyInput = MyInput;
    // Register component
    window["customElements"].define("my-input", MyInput);
})(components || (components = {}));