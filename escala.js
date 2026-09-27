/* =============================================================
   CONFIGURAÇÃO DA ESCALA — PAESPE
   -------------------------------------------------------------
   Aqui ficam só as peças fixas do sistema: os turnos, a tolerância
   de atraso e os nomes das diretorias.

   As PESSOAS e a GRADE não moram mais neste arquivo — elas ficam
   no banco e são editadas pela coordenação, dentro do próprio site
   (aba Coordenação → Pessoas e Coordenação → Escala).
   ============================================================= */

window.ESCALA = {

  /* ---------------------------------------------------------------
     TURNOS
     O turno com "sabado: true" só aparece aos sábados, e quem está
     escalado nele vem das datas de sábado cadastradas na aba Escala.
     --------------------------------------------------------------- */
  turnos: [
    { id: "matutino",   nome: "Matutino",   inicio: "08:00", fim: "12:00" },
    { id: "vespertino", nome: "Vespertino", inicio: "14:00", fim: "18:00" },
    { id: "noturno",    nome: "Noturno",    inicio: "18:00", fim: "21:30" },
    { id: "sabado",     nome: "Sábado",     inicio: "07:30", fim: "12:00", sabado: true }
  ],

  /* Minutos de tolerância: chegar até este atraso NÃO conta como atraso. */
  toleranciaMin: 5,

  /* ---------------------------------------------------------------
     DIRETORIAS
     A ordem aqui é a ordem em que aparecem nos filtros e relatórios.
     --------------------------------------------------------------- */
  diretorias: ["Acadêmica", "Administrativa", "Captação de Recursos", "Marketing & Comunicação"],

  /* Versão curta, usada só no rótulo dentro dos cartões. */
  diretoriasCurtas: { "Captação de Recursos": "Captação", "Marketing & Comunicação": "Marketing" }

};
