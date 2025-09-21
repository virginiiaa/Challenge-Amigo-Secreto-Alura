//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criação do array onde os nomes dos amigos serão armazenados
let listaDeAmigos = [];

/**
 * Função para adicionar um novo amigo à lista.
 * Valida o campo, adiciona ao array e atualiza a interface.
 */
function adicionarAmigo() {
    // Seleciona o campo de entrada (input) onde o usuário digita o nome
    let input = document.getElementById('amigo');

    // Captura o valor digitado e remove espaços extras nas pontas
    let nome = input.value.trim();

    // Verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome."); // Exibe alerta de erro
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    listaDeAmigos.push(nome);

    // Atualiza visualmente a lista exibida no HTML
    exibirListaAmigos();

    // Limpa o campo de entrada
    input.value = "";

    // Foca novamente no campo de entrada para facilitar a digitação
    input.focus();
}

/**
 * Função que percorre o array listaDeAmigos e atualiza a lista no HTML.
 * Utiliza um loop for e innerHTML para criar os elementos <li>.
 */
function exibirListaAmigos() {
    // Seleciona o elemento <ul> onde os amigos serão exibidos
    let lista = document.getElementById('listaAmigos');

    // Limpa o conteúdo anterior da lista (evita duplicação)
    lista.innerHTML ="";

    // Percorre o array usando um loop for
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria uma string HTML representando o item da lista
        let item = `<li>${listaDeAmigos[i]}</li>`;

        // Adiciona o item criado ao final do conteúdo da <ul>
        lista.innerHTML += item;
    }
}

function sortearAmigo() {

    if (listaDeAmigos.lenght===0) {
        alert('Nenhum amigo cadastrado para sortear');
        return
    }
// Gera um índice aleatório baseado no tamanho do array
let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);


// Usa o índice para acessar o nome sorteado
let amigoSorteado = listaDeAmigos[indiceSorteado];

// Define o conteúdo do resultado usando innerHTML
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado
    }</strong></li>`;
}
