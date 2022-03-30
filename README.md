# Processo seletivo da Lemon

[Link para o desafio](https://lemonenergy.notion.site/Teste-Backend-Lemon-9958a9678c0d4ac99185850fdb9716fc)

### Teste - Backend Lemon
Nem todos os clientes que desejam fazer parte da Lemon podem ser aceitos no momento. Seja por razões regulatórias ou porque não vale a pena para o cliente ou para a Lemon ter essa empresa como cliente. No processo de aquisição de clientes, fazemos a checagem de elegibilidade da mesma, através dos dados contidos na conta de luz do cliente. Caso a empresa não seja elegível, precisamos explicitar os motivos para tal. Caso ela seja elegível, precisamos calcular também a projeção da quantidade de CO2 que ela deixaria de emitir caso usasse energia limpa. 

### Critérios de Elegibilidade

Para checar a elegibilidade iremos aplicar os seguintes critérios:

- Classe de consumo da cliente
    - Possíveis Valores: Comercial, Residencial, Industrial, Poder Público, e Rural.
    - Elegíveis: Comercial, Residencial e Industrial.
- Modalidade tarifária
    - Possíveis Valores: Branca, Azul, Verde, e Convencional.
    - Elegíveis: Convencional, Branca.
- Consumo mínimo do cliente
    - O cálculo deve ser feito utilizando a média dos 12 valores mais recentes do histórico de consumo.
        - Clientes com tipo de conexão Monofásica só são elegíveis caso tenham consumo médio acima de 400 kWh.
        - Clientes com tipo de conexão Bifásica só são elegíveis caso tenham consumo médio acima de 500 kWh.
        - Clientes com tipo de conexão Trifásica só são elegíveis caso tenham consumo médio acima de 750 kWh.
- Para calcular a projeção da **economia anual** de CO2, considere que para serem gerados 1000 kWh no Brasil são emitidos em média 84kg de CO2.


### Comandos para o terminal

`npm install` para instalar as dependencias
`npm start` para iniciar aplicação
`npx jest --coverage` para gerar relatorio de cobertura de testes
`npm test` para rodar os testes