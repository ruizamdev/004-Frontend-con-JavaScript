class CustomElement extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  getTemplate() {
    const customElement = document.createElement('template');
    customElement.innerHTML = `
      <section>
        <h1>
          <slot name="titulo" ></slot>
        </h1>
        <p>
          <slot name="parrafo" ></slot>
        </p>
      </section>
      <slot></slot>
      ${this.getStyles()}
    `;
    return customElement;
  }

  getStyles(){
    return `
      <style>
        :host {
          display: inline-block;
          width: 100%;
          min-width: 250px;
          max-width: 400px;
          font-size: 20px;
          background: linear-gradient(blue, white);
        }
        :host(.red) {
          background: linear-gradient(red, white);
        }
        :host([yellow]) {
          background: linear-gradient(yellow, white);
        }

        :host([yellow]) h1 {
          color: blue;
        }
        :host([yellow]) p {
          color: red;
        }
        :host-context(article.card) {
          display: block;
          max-width: 100%;
        }
        ::slotted(*) {
          margin: 0;
          padding: 0;
        }
        ::slotted(span) {
          font-size: 30px;
          color: red;
        }
        ::slotted(.text) {
          color: blue;
        }
      </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  };
  connectedCallback() {
    this.render();
  };
}

customElements.define('custom-element', CustomElement);

