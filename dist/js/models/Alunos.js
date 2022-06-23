export class Alunos {
    constructor() {
        this.alunos = [];
    }
    adicionar(aluno) {
        this.alunos.push(aluno);
    }
    listar() {
        return this.alunos;
    }
}
