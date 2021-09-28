import { customElement, html, LitElement } from 'lit-element';

@customElement("app-component")
export class AppComponent extends LitElement {
    protected render(): unknown {
        return html`Hello, world…`
    }
}
