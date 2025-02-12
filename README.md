```markdown
# Consumo de Combustível

## Descrição

Este projeto tem como objetivo calcular o consumo de combustível de um veículo com base na distância percorrida e na quantidade de combustível utilizada. O programa solicita ao usuário que informe esses valores e, com base nisso, calcula a média de consumo (km/l).

 Funcionalidades

- Solicita ao usuário a distância percorrida (em km) e a quantidade de combustível utilizada (em litros);
- Calcula o consumo médio de combustível (km/l);
- Exibe o resultado ao usuário de forma clara e objetiva;
- Implementa tratamento de erros para evitar cálculos com valores inválidos.

 Tecnologias Utilizadas

- Linguagem: JavaScript
- Ambiente: Node.js ou navegador

 Como Executar

1. Clone este repositório:

git clone [https://github.com/seu-usuario/consumo-combustivel.git](https://github.com/seu-usuario/consumo-combustivel.git)

2. Acesse a pasta do projeto:

cd consumo-combustivel


3. Execute o código em um ambiente compatível (navegador ou Node.js).

 Tratamento de NaN (Not-a-Number)

O tratamento de NaN neste código ocorre por meio da função `isNaN()`, que é usada para validar os valores inseridos pelo usuário antes de realizar qualquer cálculo. O código evita a ocorrência de NaN verificando se os valores fornecidos são válidos antes de utilizá-los em operações matemáticas.

Caso seja detectado um valor inválido (NaN), uma mensagem de erro é exibida ao usuário, solicitando que ele insira valores corretos. Isso impede que valores inválidos se propaguem e causem erros na exibição dos resultados, garantindo um funcionamento confiável do programa.


 Observações

- Certifique-se de substituir `"https://github.com/seu-usuario/consumo-combustivel.git"` pelo URL real do seu repositório.
- Adapte as instruções de execução caso seu projeto utilize ferramentas de build ou gerenciadores de pacotes (npm, yarn, etc.).
- Para mais informações sobre o tratamento de NaN em JavaScript, consulte a documentação oficial: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
