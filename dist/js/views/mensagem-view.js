export class MensagemView {
    constructor() {
        this.elemento = document.querySelector(".mensagemView");
    }
    template(model) {
        return `<p>${model}</>`;
    }
    update(mensagem) {
        this.elemento.style.visibility = "visible";
        const template = this.template(mensagem);
        this.elemento.innerHTML = template;
        setTimeout(() => {
            this.elemento.style.visibility = "hidden";
        }, 2000);
    }
}
