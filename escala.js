/* =============================================================
   ESCALA DOS INSTRUTORES — PAESPE
   -------------------------------------------------------------
   Este é o único arquivo que a coordenação precisa editar.

   Regras gerais:
     • Escreva o nome SEMPRE igual em todos os lugares — é por ele
       que o sistema junta os registros de cada pessoa.
     • Depois de salvar no GitHub, o site atualiza em ~1 minuto.

   Semestre: 2026.2   ·   Última atualização: 27/09/2026
   ============================================================= */

window.ESCALA = {

  /* ---------------------------------------------------------------
     TURNOS
     O turno com "sabado: true" só aparece aos sábados, e quem está
     escalado nele vem da lista SÁBADOS lá embaixo, não da grade.
     --------------------------------------------------------------- */
  turnos: [
    { id: "matutino",   nome: "Matutino",   inicio: "08:00", fim: "12:00" },
    { id: "vespertino", nome: "Vespertino", inicio: "14:00", fim: "18:00" },
    { id: "noturno",    nome: "Noturno",    inicio: "18:00", fim: "21:30" },
    { id: "sabado",     nome: "Sábado",     inicio: "07:30", fim: "12:00", sabado: true }
  ],

  /* Minutos de tolerância antes de a chegada contar como atraso. */
  toleranciaMin: 10,

  /* ---------------------------------------------------------------
     DIRETORIAS
     A ordem aqui é a ordem em que aparecem nos filtros e relatórios.
     --------------------------------------------------------------- */
  diretorias: ["Acadêmica", "Administrativa", "Captação", "Marketing"],

  /* ---------------------------------------------------------------
     INSTRUTORES
     A chave à esquerda é o APELIDO: é ela que aparece na grade
     abaixo e é ela que o banco de dados guarda. Não mude um apelido
     depois que o sistema estiver em uso — os registros antigos
     ficariam órfãos. Para corrigir a grafia que as pessoas veem,
     altere só o "completo".
     O "completo" é o nome que aparece na tela e nos relatórios.
     --------------------------------------------------------------- */
  instrutores: {
    "Adonias":          { completo: "Adonias Valdevino da Silva", diretoria: "Marketing" },
    "Ana Luíza":        { completo: "Ana Luíza Bezerra Cavalcante", diretoria: "Marketing" },
    "Antônio Ryksson":  { completo: "Antônio Ryksson Batista da Silva", diretoria: "Acadêmica" },
    "Beatriz":          { completo: "Beatriz Alvez Ferreira", diretoria: "Acadêmica" },
    "Eduarda":          { completo: "Eduarda Rayane Costa Monteiro", diretoria: "Marketing" },
    "Ellis":            { completo: "Ellis Regina Santos Tavares", diretoria: "Acadêmica" },
    "Emilly Júlia":     { completo: "Emilly Júlia da Silva Ferreira", diretoria: "Administrativa" },
    "Emilly Campelo":   { completo: "Emilly Samara Araújo Assis Campelo", diretoria: "Acadêmica" },
    "Emilly Vitória":   { completo: "Emilly Vitoria Rodrigues Oliveira", diretoria: "Administrativa" },
    "Gyldson":          { completo: "Gyldson Luiz Rodrigues dos Santos", diretoria: "Marketing" },
    "Isadora Soares":   { completo: "Isadora Soares Lopes do Nascimento", diretoria: "Acadêmica" },
    "Jackeline":        { completo: "Jackeline Salviano da Silva", diretoria: "Administrativa" },
    "Julia Cavalcante": { completo: "Julia Cavalcante Lopes dos Santos", diretoria: "Captação" },
    "Júlia Emylly":     { completo: "Júlia Emylly dos Santos", diretoria: "Administrativa" },
    "Kariny":           { completo: "Kariny Gabrielly Ramos Santos", diretoria: "Acadêmica" },
    "Kerolayne":        { completo: "Kerolayne Vitoria Ferreira Santos", diretoria: "Marketing" },
    "Maria Isadora":    { completo: "Maria Isadora Gomes Profirio", diretoria: "Captação" },
    "Maria Jaqueline":  { completo: "Maria Jaqueline Silva dos Santos", diretoria: "Captação" },
    "Sara Vitória":     { completo: "Sara Vitória Isabel Candido", diretoria: "Captação" },
    "Sarah Kessya":     { completo: "Sarah Kessya Lopes Muniz de Almeida", diretoria: "Administrativa" },
    "Thiago":           { completo: "Thiago Rocha dos Santos", diretoria: "Marketing" }
  },

  /* ---------------------------------------------------------------
     GRADE DE SEGUNDA A SEXTA
     Dias: 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta.
     --------------------------------------------------------------- */
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

  },

  /* ---------------------------------------------------------------
     SÁBADOS
     Uma linha por sábado, com a data no formato ANO-MÊS-DIA e as
     diretorias convocadas. Use "todos" quando for o programa inteiro.

     Exemplos:
       { data: "2026-10-03", diretorias: ["Acadêmica", "Captação"] },
       { data: "2026-10-10", diretorias: "todos" },

     Sábado que não estiver nesta lista não aceita registro de ponto.
     Lembre de acrescentar as datas do mês seguinte antes que ele
     comece.
     --------------------------------------------------------------- */
  sabados: [
    { data: "2026-09-05", diretorias: ["Acadêmica", "Captação"] },
    { data: "2026-09-12", diretorias: "todos" },
    { data: "2026-09-19", diretorias: ["Administrativa", "Marketing"] },
    { data: "2026-09-26", diretorias: "todos" }
  ]

};
