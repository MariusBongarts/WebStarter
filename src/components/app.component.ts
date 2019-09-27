import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  title: string = 'LitElement Starter';

  async firstUpdated() {
  }

  render() {
    return html`
    <h1>${this.title}</h1>
    <slot></slot>
`;
  }


}
