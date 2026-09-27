/* =============================================================
   ESCALA DOS INSTRUTORES — PAESPE
   -------------------------------------------------------------
   Este é o único arquivo que a coordenação precisa editar quando
   a escala mudar. Regras:

     • Os dias são números: 1 = segunda, 2 = terça, 3 = quarta,
       4 = quinta, 5 = sexta.
     • Cada nome vai entre aspas e separado por vírgula.
     • Escreva o nome SEMPRE igual em todos os dias — é por ele
       que o sistema junta os registros da pessoa.
     • Depois de salvar, o site atualiza sozinho em alguns segundos.

   Semestre: 2026.2   ·   Última atualização: 20/09/2026
   ============================================================= */

window.ESCALA = {

  turnos: [
    { id: "matutino",   nome: "Matutino",   inicio: "08:00", fim: "12:00" },
    { id: "vespertino", nome: "Vespertino", inicio: "14:00", fim: "18:00" },
    { id: "noturno",    nome: "Noturno",    inicio: "18:00", fim: "21:30" }
  ],

  /* Minutos de tolerância antes de a chegada contar como atraso. */
  toleranciaMin: 10,

  grade: {

    matutino: {
      1: ["Eduarda", "Júlia Emylly", "Sara Vitória"],
      2: ["Eduarda", "Julia Cavalcante", "Maria Jaqueline"],
      3: ["Emilly Júlia", "Gyldson", "Julia Cavalcante", "Ana Luíza"],
      4: ["Emilly Vitória", "Júlia Emylly", "Sara Vitória"],
      5: ["Kerolayne", "Maria Jaqueline", "Kariny"]
    },

    vespertino: {
      1: ["Antônio Ryksson", "Emilly Júlia", "Ellis", "Sara Vitória"],
      2: ["Beatriz", "Kariny", "Sarah Kessya", "Ana Luíza"],
      3: ["Isadora Soares", "Maria Isadora", "Sarah Kessya", "Beatriz"],
      4: ["Emilly Vitória", "Emilly Campelo", "Thiago"],
      5: ["Adonias", "Ellis", "Jackeline", "Emilly Campelo", "Ana Luíza", "Maria Isadora"]
    },

    noturno: {
      1: ["Adonias", "Emilly Júlia", "Maria Jaqueline", "Isadora Soares", "Ellis"],
      2: ["Antônio Ryksson", "Sarah Kessya", "Eduarda", "Júlia Emylly", "Thiago"],
      3: ["Gyldson", "Isadora Soares", "Kerolayne", "Emilly Vitória", "Maria Isadora", "Jackeline"],
      4: ["Adonias", "Beatriz", "Emilly Campelo", "Kariny", "Thiago"],
      5: ["Antônio Ryksson", "Jackeline", "Julia Cavalcante", "Gyldson", "Kerolayne"]
    }

  }
};
