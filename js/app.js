// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbon-form');
    const distanciaInput = document.getElementById('distancia');
    const transporteSelect = document.getElementById('transporte');
    const origemInput = document.getElementById('origem');
    const destinoInput = document.getElementById('destino');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // evita recarregar a página
            
            // Obtém a distância (em km) – pode ser manual ou futuramente via API
            let distancia = parseFloat(distanciaInput.value);
            if (isNaN(distancia) || distancia <= 0) {
                alert('Por favor, insira uma distância válida (número positivo).');
                return;
            }
            
            const transporte = transporteSelect.value;
            const emissao = calcularEmissao(distancia, transporte);
            
            exibirResultado(emissao);
            exibirDica(emissao);
            
            // (Opcional) exibe também a rota se origem/destino foram preenchidos
            if (origemInput && destinoInput && origemInput.value.trim() && destinoInput.value.trim()) {
                console.log(`Rota: ${origemInput.value} → ${destinoInput.value}`);
                // Aqui futuramente poderíamos integrar uma API de distâncias
            }
        });
    }
});