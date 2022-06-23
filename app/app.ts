import { AlunoController } from "./controller/aluno.controller.js";

const body = document.body;
const table = document.createElement("div");
const mensagem = document.createElement("div");

table.classList.add("alunos-table");
mensagem.classList.add("mensagemView");

body.appendChild(table);

const form = document.querySelector(".form");

//o método before adiciona um elemento antes de outro elemento
form.before(mensagem);

const alunoController = new AlunoController();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alunoController.adiciona();
});
