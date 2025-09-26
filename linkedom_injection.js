import {DOMParser, parseHTML} from 'linkedom';

function insertPromptInjection(originalHtmlString){
        const {
                window, document, customElements,
                HTMLElement,
                Event, CustomEvent
        } = parseHTML(originalHtmlString);

        var newElem = document.createElement("p");
        newElem.textContent = "TEXT THAT WILL CONFUSE AI";
        newElem.setAttribute("style", "opacity: 0.0; position: absolute;");

        document.body.insertBefore(
                newElem, document.body.childNodes[0]
        );

        var result = document.toString();
        return result
}

export default {insertPromptInjection}
