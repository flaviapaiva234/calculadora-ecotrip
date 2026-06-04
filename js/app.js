document.addEventListener('DOMContentLoaded', () => {
    renderizarCardsTransporte();
    
    const form = document.getElementById('carbon-form');
    const distanciaInput = document.getElementById('distancia');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let distancia = parseFloat(distanciaInput.value);
            if (isNaN(distancia) || distancia <= 0) {
                alert('Por favor, insira uma distância válida (número positivo).');
                return;
            }
            calcularEAtualizarUI(distancia);
        });
    }
    
    // Se já houver distância pré‑preenchida, calcular ao carregar (opcional)
    if (distanciaInput && distanciaInput.value) {
        let distancia = parseFloat(distanciaInput.value);
        if (!isNaN(distancia) && distancia > 0) {
            calcularEAtualizarUI(distancia);
        }
    }
});