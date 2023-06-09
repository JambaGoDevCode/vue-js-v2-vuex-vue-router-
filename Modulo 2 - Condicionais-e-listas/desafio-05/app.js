Vue.createApp({
  data() {
    return {
      expressao: true,
      nomes: ["Ana", "Rafa", "Lucas", "Gui"],
      livro: {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkiens",
        volume: "3",
      },
      aluno: {
        id: 10,
        nome: "Maria",
        notas: [7.67, 8.33, 6.98, 9.21],
      },
    };
  },
}).mount("#desafio");
