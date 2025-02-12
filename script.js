

function calcular() {
    // Obtenção e validação dos dados
    let distancia_Percorrida = parseFloat(document.getElementById("distancia").value);
    let consumo_Medio = parseFloat(document.getElementById("consumo").value);
    let quantidade_Postos_Pesquisados = parseInt(document.getElementById("postos").value);

    if (isNaN(distancia_Percorrida) || distancia_Percorrida <= 0 ||
        isNaN(consumo_Medio) || consumo_Medio <= 0 ||
        isNaN(quantidade_Postos_Pesquisados) || quantidade_Postos_Pesquisados <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    let soma_total_Valores_Pesquisados = 0;
    let menor_Valor_Pesquisado = Number.MAX_VALUE;

    // Obtenção e validação dos preços dos postos
    for (let i = 0; i < quantidade_Postos_Pesquisados; i++) {
        let valor = parseFloat(document.getElementById(`posto${i + 1}`).value);
        if (isNaN(valor) || valor <= 0) {
            alert(`Valor inválido no posto ${i + 1}! Digite um preço válido e positivo.`);
            return;
        }
        soma_total_Valores_Pesquisados += valor;
        menor_Valor_Pesquisado = Math.min(menor_Valor_Pesquisado, valor);
    }

    // Cálculos
    let consumo_Necessario_Litros = distancia_Percorrida / consumo_Medio;
    let media = soma_total_Valores_Pesquisados / quantidade_Postos_Pesquisados;
    let gasto_Diario = 2 * (consumo_Necessario_Litros * menor_Valor_Pesquisado);

    // Exibição dos resultados
    document.getElementById("consumo-necessario").textContent = `O consumo necessário é de: ${consumo_Necessario_Litros.toFixed(2)} litros`;
    document.getElementById("media-precos").textContent = `A média dos preços dos combustíveis é R$ ${media.toFixed(2)}`;
    document.getElementById("menor-preco").textContent = `O menor valor pesquisado foi R$ ${menor_Valor_Pesquisado.toFixed(2)}`;
    document.getElementById("gasto-diario").textContent = `O gasto diário com combustível é R$ ${gasto_Diario.toFixed(2)}`;

    document.getElementById("resultados").style.display = "block";
}

// Criação dos campos de preço dos postos dinamicamente
document.getElementById("postos").addEventListener("input", function() {
    let quantidade_Postos_Pesquisados = parseInt(this.value);
    let precos_postos = document.getElementById("precos-postos");
    precos_postos.innerHTML = ""; // Limpa os campos anteriores

    if (quantidade_Postos_Pesquisados > 0) {
        for (let i = 0; i < quantidade_Postos_Pesquisados; i++) {
            let label = document.createElement("label");
            label.textContent = `Valor do combustível no posto ${i + 1}:`;
            let input = document.createElement("input");
            input.type = "number";
            input.id = `posto${i + 1}`;
            input.required = true;
            precos_postos.appendChild(label);
            precos_postos.appendChild(input);
            precos_postos.appendChild(document.createElement("br"));
        }
    }
});


// Tratamento do NaN

// O tratamento de NaN (Not-a-Number) neste código ocorre por meio da função isNaN(),
// que é usada para validar os valores inseridos pelo usuário antes de realizar qualquer cálculo. 
// O código evita a ocorrência de NaN validando os valores antes de usá-los em cálculos. 
// Isso impede que valores inválidos se propaguem e causem erros na exibição dos resultados,pois se
// NaN não fosse tratado, os cálculos seguintes poderiam resultar em NaN, propagando erros.Isso



// // alert("Seja bem-vindo");

// function Mensagem(mensagem) {
//     document.write(mensagem + "<br>");
// }

// // Entrada e validação da distância percorrida
// let distancia_Percorrida = parseFloat(prompt("Informe a distância percorrida da sua casa até seu trabalho (em km):"));
// while (isNaN(distancia_Percorrida) || distancia_Percorrida <= 0) {
//     distancia_Percorrida = parseFloat(prompt("Valor inválido! Informe um número positivo para a distância percorrida (em km):"));
// }

// // Entrada e validação do consumo médio
// let consumo_Medio = parseFloat(prompt("Informe o consumo médio do seu veículo (em km/L):"));
// while (isNaN(consumo_Medio) || consumo_Medio <= 0) {
//     consumo_Medio = parseFloat(prompt("Valor inválido! Informe um número positivo para o consumo médio (em km/L):"));
// }

// var consumo_Necessario_Litros = distancia_Percorrida / consumo_Medio;
// Mensagem(`O consumo necessário é de: ${consumo_Necessario_Litros.toFixed(2)} litros`);

// // Entrada e validação da quantidade de postos pesquisados
// let quantidade_Postos_Pesquisados = parseInt(prompt("Informe a quantidade de postos pesquisados:"));
// while (isNaN(quantidade_Postos_Pesquisados) || quantidade_Postos_Pesquisados <= 0) {
//     quantidade_Postos_Pesquisados = parseInt(prompt("Valor inválido! Informe um número positivo para a quantidade de postos pesquisados:"));
// }

// let soma_total_Valores_Pesquisados = 0;
// let menor_Valor_Pesquisado = Number.MAX_VALUE;

// // Entrada e validação dos preços dos postos
// for (let i = 0; i < quantidade_Postos_Pesquisados; i++) {
//     let valor;
//     do {
//         valor = parseFloat(prompt(`Informe o valor do combustível no posto ${i + 1}:`));
//         if (isNaN(valor) || valor <= 0) {
//             alert("Valor inválido! Digite um preço válido e positivo.");
//         }
//     } while (isNaN(valor) || valor <= 0);

//     soma_total_Valores_Pesquisados += valor;

//     if (valor < menor_Valor_Pesquisado) {
//         menor_Valor_Pesquisado = valor;
//     }
// }

// // Cálculo da média dos preços
// let media = soma_total_Valores_Pesquisados / quantidade_Postos_Pesquisados;
// Mensagem("A média dos preços dos combustíveis é R$ " + media.toFixed(2));

// // Exibição do menor valor pesquisado
// Mensagem("O menor valor pesquisado foi R$ " + menor_Valor_Pesquisado.toFixed(2));

// // Cálculo do gasto diário
// if (menor_Valor_Pesquisado !== Number.MAX_VALUE) {
//     let gasto_Diario = 2 * (consumo_Necessario_Litros * menor_Valor_Pesquisado);
//     Mensagem("O gasto diário com combustível é R$ " + gasto_Diario.toFixed(2));
// } else {
//     Mensagem("Não foi possível calcular o gasto diário, pois nenhum preço válido foi informado.");
// }
