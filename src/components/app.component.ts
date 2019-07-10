import { css, customElement, html, LitElement, property, unsafeCSS, query } from 'lit-element';

const componentCSS = require('./app.component.scss');

@customElement('marius-root')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @query('button')
  btnElement!: HTMLButtonElement;

  emit() {
    this.dispatchEvent(
      new CustomEvent('clicked', {
        bubbles: true
      })
    );
  }

  render() {
    return html`
          <h1>LitElement Starter</h1>
`;
  }

}
