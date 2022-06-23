import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const data = new Date(this.inputData.value);
        const negociacao = new Negociacao(data, +this.inputQuantidade, +this.inputValor.value);
        this.negociacoes.adicionar(negociacao);
    }
}
