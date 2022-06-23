import { Aluno } from "../models/Aluno.js";
import { Alunos } from "../models/Alunos.js";

export class AlunosView {
  private element: HTMLElement;

  constructor() {
    this.element = document.querySelector(".alunos-table");
  }

  template(alunos: Alunos) {
    return `
        <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Nascimento</th>
            </tr>
        </thead>

        <tbody>
        ${alunos
          .listar()
          .map((element) => {
            return `
            <tr>
              <td>${element.nome}</td>
              <td>${element.endereco}</td>
              <td>${element.nascimento.toLocaleString("pt-br", {
                // timeZone: "utc",
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}</td>
            </tr>`;
          })
          .join("")}
          
        </tbody>
        
        </table>
        `;
  }

  update(model: Alunos) {
    let template = this.template(model);

    this.element.innerHTML = template;
  }
}
