
# Consumo de Combustível

 Descrição

Este projeto tem como objetivo calcular o consumo de combustível de um veículo com base na distância percorrida e na quantidade de combustível utilizada. O programa solicita ao usuário que informe esses valores e, com base nisso, calcula a média de consumo (km/l).

 Funcionalidades

- Solicita ao usuário a distância percorrida (em km) e a quantidade de combustível utilizada (em litros);
- Calcula o consumo médio de combustível (km/l);
- Exibe o resultado ao usuário de forma clara e objetiva;
- Implementa tratamento de erros para evitar cálculos com valores inválidos.

 Tecnologias Utilizadas

- Linguagem: JavaScript,HTML,CSS
- Ambiente:  navegador

 Tratamento de NaN (Not-a-Number)

O tratamento de NaN neste código ocorre por meio da função `isNaN()`, que é usada para validar os valores inseridos pelo usuário antes de realizar qualquer cálculo. O código evita a ocorrência de NaN verificando se os valores fornecidos são válidos antes de utilizá-los em operações matemáticas.

Caso seja detectado um valor inválido (NaN), uma mensagem de erro é exibida ao usuário, solicitando que ele insira valores corretos. Isso impede que valores inválidos se propaguem e causem erros na exibição dos resultados, garantindo um funcionamento confiável do programa.



