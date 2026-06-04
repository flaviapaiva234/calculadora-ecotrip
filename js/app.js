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

    // Alternância de tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    // Carregar tema salvo no localStorage
    const savedTheme = localStorage.getItem('ecotrip-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️'; // sol para tema claro
    } else {
        themeToggle.textContent = '🌙'; // lua para tema escuro
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('ecotrip-theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}
});