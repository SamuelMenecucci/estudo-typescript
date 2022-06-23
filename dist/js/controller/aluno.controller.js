import { DiasDaSemana } from "../enums/DiasSemana.js";
import { Aluno } from "../models/Aluno.js";
import { Alunos } from "../models/Alunos.js";
import { AlunosView } from "../views/alunos-view.js";
import { MensagemView } from "../views/mensagem-view.js";
export class AlunoController {
    constructor() {
        this.alunos = new Alunos();
        this.tableView = new AlunosView();
        this.mensagemView = new MensagemView();
        this.nomeInput = document.querySelector("#nome");
        this.enderecoInput = document.querySelector("#endereco");
        this.nascimentoInput = document.querySelector("#data");
        this.tableView.update(this.alunos);
    }
    adiciona() {
        const { nome, endereco, data } = document.forms["aluno"];
        if (!nome.value && !endereco.value && !data.value)
            return this.mensagemView.update("Preencha todos os campos!");
        const exp = /-/g;
        const dataFormatada = new Date(this.nascimentoInput.value.replace(exp, ","));
        if (dataFormatada.getDay() == DiasDaSemana.DOMINGO ||
            dataFormatada.getDay() === DiasDaSemana.SABADO) {
            return this.mensagemView.update("Aceito somente dias uteis!");
        }
        const aluno = new Aluno(this.nomeInput.value, this.enderecoInput.value, dataFormatada);
        this.alunos.adicionar(aluno);
        this.tableView.update(this.alunos);
        this.mensagemView.update("Aluno adicionado com sucesso!");
        this.limparCampos();
    }
    limparCampos() {
        this.nomeInput.value = "";
        this.enderecoInput.value = "";
        this.nascimentoInput.value = "";
    }
}
