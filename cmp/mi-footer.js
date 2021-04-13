class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Brayan Jesús Hernández Olguín.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);

