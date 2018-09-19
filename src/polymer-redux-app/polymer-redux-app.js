import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class PolymerReduxApp extends PolymerElement {

    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'polymer-redux-app'
            }
        };
    }

    ready() {
        super.ready();
    }
}

window.customElements.define('polymer-redux-app', PolymerReduxApp);
