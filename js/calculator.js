// Calcula emissão para um transporte específico
function calcularEmissao(distanciaKm, transporteId) {
    const transporte = transportes.find(t => t.id === transporteId);
    if (!transporte) return null;
    const emissao = distanciaKm * transporte.fator;
    return parseFloat(emissao.toFixed(2));
}

// Obtém a emissão de qualquer transporte (para comparação)
function getEmissaoPorTransporte(distanciaKm, transporteId) {
    const transporte = transportes.find(t => t.id === transporteId);
    if (!transporte) return 0;
    return parseFloat((distanciaKm * transporte.fator).toFixed(2));
}

// Gera dica baseada na emissão
function gerarDica(emissao) {
    if (emissao === 0) return '🌿 Parabéns! Escolha sustentável!';
    if (emissao < 10) return '💚 Baixa emissão. Ótima escolha!';
    if (emissao < 50) return '⚠️ Emissão moderada. Considere meios menos poluentes.';
    return '🌍 Emissão alta! Que tal compensar com ações ambientais?';
}