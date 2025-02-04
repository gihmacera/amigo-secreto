//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let historicoSorteios = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    input.value = ""; 
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.classList.add('name-item');
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

   
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    
    const amigosDisponiveis = amigos.filter(amigo => !historicoSorteios.includes(amigo));

    
    if (amigosDisponiveis.length === 0) {
        historicoSorteios = [];
        amigosDisponiveis.push(...amigos);
    }

    
    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    const amigoSecreto = amigosDisponiveis[indiceSorteado];

    
    historicoSorteios.push(amigoSecreto);

    
    resultado.innerHTML = `<li class="result-item">O amigo secreto é: <strong>${amigoSecreto}</strong></li>`;

    
    document.getElementById('opcoesPosSorteio').style.display = 'flex';
}

function zerarLista() {
    amigos = [];
    historicoSorteios = [];
    atualizarLista();
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('opcoesPosSorteio').style.display = 'none';
}

function continuarJogo() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('opcoesPosSorteio').style.display = 'none';
    document.getElementById('amigo').focus();
}