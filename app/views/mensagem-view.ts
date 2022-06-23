export class MensagemView {
  private elemento: HTMLElement;

  constructor() {
    this.elemento = document.querySelector(".mensagemView");
  }

  template(model: string) {
    return `<p>${model}</>`;
  }

  update(mensagem: string) {
    this.elemento.style.visibility = "visible";

    const template = this.template(mensagem);

    this.elemento.innerHTML = template;

    setTimeout(() => {
      this.elemento.style.visibility = "hidden";
    }, 2000);
  }
}
