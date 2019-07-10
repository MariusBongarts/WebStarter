import { LitElement } from 'lit-element';
import { AppComponent } from './app.component';
import './app.component';

describe('marius-root', () => {
  let element: AppComponent;


  beforeEach(async () => {
    localStorage.preferredLanguage = 'german';
    element = document.createElement('marius-root') as AppComponent;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => { element.remove(); });

  it('should render marius-root', async () => {
    document.body.appendChild(element);
    await element.updateComplete;
    const title = element.shadowRoot!.querySelector('h1') as HTMLElement;
    expect(title.textContent).toBe('LitElement Starter');
  });


});
