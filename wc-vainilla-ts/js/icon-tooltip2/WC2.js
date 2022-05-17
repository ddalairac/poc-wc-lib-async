export default class WC2 extends HTMLElement {
    setStylesFile(file) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', file);
        return linkElem;
    }
}
//# sourceMappingURL=WC2.js.map