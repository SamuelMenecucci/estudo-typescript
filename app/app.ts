import { AlunoController } from "./controller/aluno.controller.js";

const body = document.body;
const table = document.createElement("div");
const mensagem = document.createElement("div");

table.classList.add("alunos-table");
mensagem.classList.add("mensagemView");

body.appendChild(table);
