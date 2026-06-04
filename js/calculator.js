// Função que calcula a emissão total de CO₂
function calcularEmissao(distanciaKm, tipoTransporte) {
    const fator = fatoresEmissao[tipoTransporte];
    if (fator === undefined) {
        console.error("Tipo de transporte inválido:", tipoTransporte);
        return null;
    }
    const emissao = distanciaKm * fator;
    return parseFloat(emissao.toFixed(2)); // arredonda para 2 casas decimais
}