import { DiasDaSemana } from "../enums/DiasSemana.js";
import { Aluno } from "../models/Aluno.js";
import { Alunos } from "../models/Alunos.js";
import { AlunosView } from "../views/alunos-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class AlunoController {
  private nomeInput: HTMLInputElement;
  private enderecoInput: HTMLInputElement;
  private nascimentoInput: HTMLInputElement;
  private alunos: Alunos = new Alunos();
  private tableView = new AlunosView();
  private mensagemView = new MensagemView();

  constructor() {
    this.nomeInput = document.querySelector("#nome");
    this.enderecoInput = document.querySelector("#endereco");
    this.nascimentoInput = document.querySelector("#data");
    this.tableView.update(this.alunos);
  }

  adiciona() {
    //acesso os input pelo id
    const { nome, endereco, data } = document.forms["aluno"];

    if (!nome.value && !endereco.value && !data.value)
      return this.mensagemView.update("Preencha todos os campos!");

    const exp = /-/g;

    //se eu passar o valor da data da mesma forma que ele vem do input, sem trocar o - pelo , irá dar um dia a menos
    const dataFormatada = new Date(
      this.nascimentoInput.value.replace(exp, ",")
    );

    if (
      dataFormatada.getDay() == DiasDaSemana.DOMINGO ||
      dataFormatada.getDay() === DiasDaSemana.SABADO
    ) {
      return this.mensagemView.update("Aceito somente dias uteis!");
    }
    const aluno = new Aluno(
      this.nomeInput.value,
      this.enderecoInput.value,
      dataFormatada
    );

    this.alunos.adicionar(aluno);

    this.tableView.update(this.alunos);
    this.mensagemView.update("Aluno adicionado com sucesso!");

    this.limparCampos();
  }

  public limparCampos() {
    this.nomeInput.value = "";
    this.enderecoInput.value = "";
    this.nascimentoInput.value = "";
  }
}
