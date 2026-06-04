// Atualiza o resultado na tela
function exibirResultado(emissao) {
    const emissaoElem = document.getElementById('emissao');
    if (emissaoElem) {
        if (emissao !== null && !isNaN(emissao)) {
            emissaoElem.textContent = `${emissao} kg CO₂`;
        } else {
            emissaoElem.textContent = `-- kg CO₂`;
        }
    }
}

// Exibe uma dica ecológica baseada na emissão
function exibirDica(emissao) {
    const dicaElem = document.getElementById('dica');
    if (!dicaElem) return;
    
    if (emissao === null || isNaN(emissao)) {
        dicaElem.textContent = '';
        return;
    }
    
    if (emissao === 0) {
        dicaElem.textContent = '🌿 Parabéns! Você escolheu um meio de transporte sustentável!';
    } else if (emissao < 10) {
        dicaElem.textContent = '💚 Baixa emissão. Ótima escolha!';
    } else if (emissao < 50) {
        dicaElem.textContent = '⚠️ Emissão moderada. Considere meios menos poluentes.';
    } else {
        dicaElem.textContent = '🌍 Emissão alta! Que tal compensar com ações ambientais?';
    }
}

// Limpa os campos de origem/destino se quiser (opcional)
function limparCampos() {
    // não obrigatório, apenas por organização
}