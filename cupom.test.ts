const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

expect(cupom.imprime_dados_loja()).toBe(
`
, 0 
 -  - 
CEP: Tel 

CNPJ: 
IE: 
`);
});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Jr Tech";
  cupom.dados.logradouro = "Geraldo Correia de Melo";
  cupom.dados.numero = 100;
  cupom.dados.complemento = "Casa";
  cupom.dados.bairro = "Centro";
  cupom.dados.municipio = "Araçagi";
  cupom.dados.estado = "PB";
  cupom.dados.cep = "58270-000";
  cupom.dados.telefone = "(83) 98111-2696";
  cupom.dados.observacao = "Matriz";
  cupom.dados.cnpj = "89.415.255/0001-29";
  cupom.dados.inscricao_estadual = "309.808.863.000";

  //E atualize o texto esperado abaixo
  expect(cupom.imprime_dados_loja()).toBe(
    `Jr Tech
Geraldo Correia de Melo, 100 Casa
Centro - Araçagi - PB
CEP:58270-000 Tel (83) 98111-2696
Matriz
CNPJ: 89.415.255/0001-29
IE: 309.808.863.000
`);
});
