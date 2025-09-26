const jsdom = require("jsdom");

function insertPromptInjection(originalHtmlString){
        const dom = new jsdom.JSDOM(originalHtmlString);
        var newElem = dom.window.document.createElement("p");
        newElem.textContent = "TEXT THAT WILL CONFUSE AI";
        newElem.setAttribute("style", "opacity: 0.0; position: absolute;");

        dom.window.document.body.insertBefore(
                newElem, dom.window.document.body.childNodes[0]
        );

        //return dom;
        result = dom.serialize();
        return result
}
