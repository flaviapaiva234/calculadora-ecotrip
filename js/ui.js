let transporteAtivo = "carro";

// Renderiza os cards de transporte
function renderizarCardsTransporte() {
    const container = document.getElementById('transport-cards');
    if (!container) return;
    container.innerHTML = '';
    transportes.forEach(transp => {
        const card = document.createElement('div');
        card.className = `transport-card ${transporteAtivo === transp.id ? 'active' : ''}`;
        card.dataset.id = transp.id;
        card.innerHTML = `
            <div class="card-icon">${transp.icone}</div>
            <div class="card-nome">${transp.nome}</div>
            <div class="card-fator">${transp.fator} kg/km</div>
        `;
        card.addEventListener('click', () => {
            document.querySelectorAll('.transport-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            transporteAtivo = transp.id;
            document.getElementById('transporte').value = transp.id;
            // Recalcula se houver distância
            const distancia = parseFloat(document.getElementById('distancia').value);
            if (!isNaN(distancia) && distancia > 0) {
                calcularEAtualizarUI(distancia);
            }
        });
        container.appendChild(card);
    });
}

// Exibe o resultado detalhado (rota, distância, emissão, dica)
function exibirResultadoDetalhado(emissao, distancia, origem, destino, transporteId) {
    const resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) return;
    resultadoDiv.style.display = 'block';

    const rotaSpan = document.getElementById('rota-info');
    if (rotaSpan) {
        if (origem && destino && origem.trim() && destino.trim()) {
            rotaSpan.textContent = `${origem} → ${destino}`;
        } else {
            rotaSpan.textContent = 'Não informada';
        }
    }
    const distanciaSpan = document.getElementById('distancia-info');
    if (distanciaSpan) distanciaSpan.textContent = `${distancia} km`;

    const emissaoEl = document.getElementById('emissao');
    if (emissaoEl) emissaoEl.textContent = `${emissao} kg CO₂`;

    const dicaEl = document.getElementById('dica');
    if (dicaEl) dicaEl.textContent = gerarDica(emissao);
}

// Atualiza a tabela de comparação
function atualizarComparacao(distanciaKm, transporteSelecionadoId) {
    const container = document.getElementById('comparacao-tabela');
    if (!container) return;

    const emissaoSelecionada = getEmissaoPorTransporte(distanciaKm, transporteSelecionadoId);
    let html = '<div class="comparacao-grid">';
    transportes.forEach(transp => {
        const emissao = getEmissaoPorTransporte(distanciaKm, transp.id);

        let percentual;
        if (emissaoSelecionada > 0) {
            percentual = (emissao / emissaoSelecionada) * 100;
        } else if (emissaoSelecionada === 0 && emissao > 0) {
            percentual = Infinity;   // em vez de 999
        } else {
            percentual = 0;          // ambos zero
        }
        const percentualFormatado = isFinite(percentual) ? percentual.toFixed(1) : '∞';

        const destaque = (transp.id === transporteSelecionadoId) ? 'destaque' : '';
        html += `
            <div class="comparacao-card ${destaque}">
                <div class="comparacao-icon">${transp.icone}</div>
                <div class="comparacao-nome">${transp.nome}</div>
                <div class="comparacao-valor">${emissao} kg CO₂</div>
                <div class="comparacao-vs">vs selecionado: ${percentualFormatado}%</div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// Função principal chamada ao clicar em calcular ou mudar transporte
function calcularEAtualizarUI(distancia) {
    const origem = document.getElementById('origem').value;
    const destino = document.getElementById('destino').value;
    const transporteId = transporteAtivo;
    const emissao = calcularEmissao(distancia, transporteId);
    if (emissao !== null) {
        exibirResultadoDetalhado(emissao, distancia, origem, destino, transporteId);
        atualizarComparacao(distancia, transporteId);
    } else {
        console.error('Erro no cálculo');
    }
}