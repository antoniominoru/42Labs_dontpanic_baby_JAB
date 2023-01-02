# Dicionário - Glossário


# Politica

- Multiplos inputs
- Full inglês
- Names - CamelCase
- normalizar somente + e -
- Receber somente 1 caractere por input
- Receber somente 6 inputs
- answer -     { field1: '8', field2: '*', field3: '9', field4: '-', field5: '3', field6: '0' }

```js
request.body = {
	field1: "1",
	field2: "2",
	field3: "+",
	field4: "3",
	field5: "/",
	field6: "5"
}

response.body = {
	message: "Certo",
	clues: {
		field1: "T",
		field2: "X",
		field3: "C",
		field4: "T",
		field5: "X",
		field6: "C"
	}
}
// caso não de 42 = Mensagem: formula errada, clues: (sem envio)
// caso dê de 42 = Mensagem: ok, clues:(envio de dica)
// caso caracteres não válidos = Mensagem: syntaxe errada, clues:(sem envio)
```
# Lista de tarefas
BACKLOG

lista de tarefas
- bugs front
- Readme.md como funciona o jogo
- O que faz quando ganha
- Erro se deu mensagem
- Estrutura de pastas front end
- Unitest front
- Revisar o Pdf

- Funções tests
- Teste Automatizado de integracao


---------------------------------------
FEITO
30-12-2022 - Sexta-feira

- integrar post - ok
- enviar post para Back-end - post - ok
- Colocar explicaçao do jogo  - ok
- validar input - Se tem só 1 caractere - ok
- validar input - Se tem só 6 inputs - ok
- Retornar Dar a dica - TXC - ok

- padronizar resposta front-Back - ok
- post do front - com 6 campos- ok
- separar em 6 inputs - HTML - Limite - cascateamento - ok
- implementou flexbox - margin com gap - hover do botao - ok
- validar resultado da Formula - ok
- validar input - caracteres validos  - ok
- padronizar envio front-Back  - ok


23-12-2022 - Sexta-feira

- aprender usar forms - campo obrigatório - passar para o proximo - ok
- aprender testar front - dependência do React - ok
- funcionar Post - ok
- GET - await - ok
- GET - Try -Catch - ok
- GET - Async - ok
- POST - await - ok
- POST - Try -Catch - ok
- POST - Async - ok
- Teste Manual de integracao - ok
- enviar informação de input para Back-end - ok

