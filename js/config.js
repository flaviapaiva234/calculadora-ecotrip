// Fatores de emissão de CO₂ por meio de transporte (kg CO₂ por km)
const fatoresEmissao = {
    carro: 0.192,        // Carro a gasolina (médio)
    carro_etanol: 0.062, // Carro a etanol
    onibus: 0.041,       // Ônibus urbano/interestadual
    aviao: 0.185,        // Avião (doméstico, médio)
    trem: 0.031,         // Trem/metrô
    metro: 0.031,        // Metrô (mesmo fator)
    bicicleta: 0.0,      // Zero emissão direta
    caminhada: 0.0       // Zero emissão direta
};

// Exporta para uso global (caso necessário, mas estará disponível no escopo global)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = fatoresEmissao;
}