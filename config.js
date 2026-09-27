/* =============================================================
   CONFIGURAÇÃO DO PONTO — PAESPE
   -------------------------------------------------------------
   Preencha os dois campos do SUPABASE com os dados do seu projeto
   (Settings → API no painel do Supabase). Enquanto estiverem
   vazios, o site funciona em MODO DEMONSTRAÇÃO: os registros
   ficam apenas no navegador de quem abriu, para você testar o
   visual antes de publicar.
   ============================================================= */

window.CONFIG = {

  SUPABASE_URL: "https://rwciksfdmehofgmkjsvb.supabase.co",

  /* Cole aqui a chave pública do projeto: menu lateral → API Keys.
     Serve tanto a legada "anon public" (começa com eyJ...) quanto a
     nova "publishable key" (começa com sb_publishable_...).
     Ela é feita para ficar exposta no site — quem protege os dados
     são as políticas de RLS que o SQL criou. */
  SUPABASE_ANON_KEY: "sb_publishable_om6MCNFsub1sMRQQzNV2gg_68U2Zy0q",

  /* ----------------------------------------------------------
     CERCA DE LOCALIZAÇÃO
     O ponto só é aceito dentro do raio abaixo, medido a partir
     das coordenadas do prédio do PAESPE.

     Enquanto lat e lng estiverem como null, a checagem fica
     DESLIGADA e qualquer pessoa pode registrar de onde estiver.

     Para descobrir as coordenadas: abra o Google Maps, dê um
     toque longo em cima do prédio e copie os dois números que
     aparecem (o primeiro é lat, o segundo é lng).
     ---------------------------------------------------------- */
  LOCAL: {
    lat: -9.551840,
    lng: -35.775514,
    raioMetros: 150,
    nome: "prédio do PAESPE"
  },

  /* Valor cheio da bolsa, em reais. A bolsa de cada instrutor é
     esse valor multiplicado pela frequência dele no mês. */
  BOLSA: 700,

  /* Texto do rodapé. */
  RODAPE: "PAESPE · Programa de Apoio aos Estudantes das Escolas Públicas do Estado"
};
