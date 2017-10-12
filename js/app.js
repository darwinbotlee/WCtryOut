var components;
(function (components) {
    class LabelComponent extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = "<h1>Hello World!<h1>";
        }
        connectedCallback() {
            /*
                Called every time the element is inserted into the DOM. Useful for running setup code,
                such as fetching resources or rendering. Generally,
                you should try to delay work until this time.
            */
            //this.style.color = "red";
        }
        disconnectedCallback() {
            /*
                Called every time the element is removed from the DOM. Useful for running clean up code (removing event listeners, etc.).
            */
        }
        attributeChangedCallback(attrName, oldVal, newVal) {
            /*
                An attribute was added, removed, updated, or replaced. Also called for initial values
                when an element is created by the parser, or upgraded. Note: only attributes listed in
                the observedAttributes property will receive this callback.
            */
        }
        adoptedCallback() {
            /*
                The custom element has been moved into a new document (e.g. someone called document.adoptNode(el)).
            */
        }
    }
    components.LabelComponent = LabelComponent;
    // Register component
    window["customElements"].define("label-component", LabelComponent);
})(components || (components = {}));
var components;
(function (components) {
    class ModalComponent extends HTMLElement {
        constructor() {
            super();
            this.state = "closed";
            // -- Template --
            let template = document.querySelector('link[rel="import"]')["import"].cloneNode(true).getElementById("modal-component-template").content;
            let body = template.querySelector(".modal-body");
            let bodyTemplate = this.innerHTML;
            this.innerHTML = "";
            body.innerHTML += bodyTemplate;
            this.appendChild(template);
            this.className = "modal-window";
        }
        show() {
            this.className = "modal-window modal-window-display";
            this.state = "open";
        }
        hide() {
            this.className = "modal-window";
            this.state = "closed";
        }
    }
    components.ModalComponent = ModalComponent;
    // Register component
    window["customElements"].define("modal-component", ModalComponent);
})(components || (components = {}));
//# sourceMappingURL=app.js.map