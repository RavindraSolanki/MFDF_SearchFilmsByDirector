import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `mfdf-searchfilmsbydirector`
 * Polymer element to search for films by director
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MfdfSearchfilmsbydirector extends PolymerElement {
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
        value: 'mfdf-searchfilmsbydirector',
      },
    };
  }
}

window.customElements.define('mfdf-searchfilmsbydirector', MfdfSearchfilmsbydirector);
