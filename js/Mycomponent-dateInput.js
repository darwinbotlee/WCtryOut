var components;
(function (components) {
    class MyDateInput extends HTMLElement {        

        constructor() {
            super();                                    
        }

        connectedCallback() {
            this.DOMElementDiv = document.createElement("div");
            this.DOMElementDiv.setAttribute("class", "input-group date");
            this.DOMElementDiv.id = "datetimepicker1";

            this.DOMElementInput = document.createElement("input");
            this.DOMElementInput.setAttribute("type", "date");
            this.DOMElementInput.setAttribute("placeholder", this.attributes.getNamedItem("placeholder").value);
            this.DOMElementInput.setAttribute("class", "form-control");

            this.DOMElementSpan = document.createElement("span");
            this.DOMElementSpan.setAttribute("class", "input-group-addon");
            this.DOMElementSpan.innerHTML = "<span class='glyphicon glyphicon-calendar'></span>";

            this.DOMElementDiv.appendChild(this.DOMElementInput);
            this.DOMElementDiv.appendChild(this.DOMElementSpan);

            this.appendChild(this.DOMElementDiv);
            this.DOMElementInput.addEventListener('keyup', e => this.validator(this.DOMElement.value));            
        }

        validator(val) {
            if (/\D/.test(val)) {
                alert("Please only enter numeric values");
                this.DOMElementInput.value = "";
            }                                
        }
    }
    components.MyDateInput = MyDateInput;
    // Register component
    window["customElements"].define("my-dateinput", MyDateInput);
})(components || (components = {}));