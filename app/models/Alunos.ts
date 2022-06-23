import { Aluno } from "./Aluno.js";

export class Alunos {
  private alunos: Array<Aluno> = [];

  adicionar(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  listar(): ReadonlyArray<Aluno> {
    return this.alunos;
  }
}
