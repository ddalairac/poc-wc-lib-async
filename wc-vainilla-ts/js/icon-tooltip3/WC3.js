export default class WC3 extends HTMLElement {
    static setStylesFile(file) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', file);
        return linkElem;
    }
}
//# sourceMappingURL=WC3.js.map