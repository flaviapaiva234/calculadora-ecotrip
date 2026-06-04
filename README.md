<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <h1>🌱 EcoTrip – Calculadora de Pegada de Carbono</h1>
  </p>
</div>
<!--END_SECTION:header-->

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Status&message=Concluido&color=28a745&labelColor=202024" alt="Status" />
  <img src="https://img.shields.io/static/v1?label=HTML5&message=5&color=E34F26&labelColor=202024" alt="HTML5" />
  <img src="https://img.shields.io/static/v1?label=CSS3&message=3&color=1572B6&labelColor=202024" alt="CSS3" />
  <img src="https://img.shields.io/static/v1?label=JavaScript&message=ES6&color=F7DF1E&labelColor=202024" alt="JavaScript" />
  <img src="https://img.shields.io/static/v1?label=GitHub+Pages&message=online&color=6b442b&labelColor=202024" alt="GitHub Pages" />
</p>

## 👩‍💻 Expert

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/flaviapaiva234">
        <img src="https://avatars.githubusercontent.com/flaviapaiva234" width="120px;" alt="Flávia Paiva"/><br>
        <sub><b>Flávia Paiva</b></sub>
      </a>
    </td>
    <td>
      <p>🎯 Analista de QA Júnior<br/>
      🌟 Criadora da Calculadora EcoTrip<br/>
      👩‍💻 Habilidades: HTML, CSS, JavaScript, Lógica de Programação, Sustentabilidade
      </p>
      <a href="https://www.linkedin.com/in/flaviapaiva234/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
      </a>
      <a href="https://github.com/flaviapaiva234">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
      </a>
    </td>
  </tr>
</table>

## 🌐 Projeto Online

Acesse a **Calculadora EcoTrip** diretamente no navegador:

👉 [https://flaviapaiva234.github.io/calculadora-ecotrip/](https://flaviapaiva234.github.io/calculadora-ecotrip/)

## 💻 Sobre o Projeto

**EcoTrip** é uma calculadora de impacto ambiental que estima a emissão de dióxido de carbono (CO₂) gerada por uma viagem com base na distância percorrida e no meio de transporte utilizado.

O projeto foi desenvolvido como parte do Bootcamp **"Do Prompt ao Agente"** da DIO, com o objetivo de praticar a construção de uma aplicação web completa (front-end) com foco em responsividade, usabilidade e lógica de programação.

### 🔍 Funcionalidades

- ✅ Campo opcional de **origem e destino** (reservado para integração futura com API de distâncias)
- ✅ Campo obrigatório de **distância** (km) com entrada manual
- ✅ **Seleção de meio de transporte** (carro (gasolina), carro (etanol), motocicleta, ônibus, avião, trem, metrô, navio/balsa, caminhão, bicicleta, caminhada)
- ✅ **Cálculo automático** da emissão de CO₂ com base em fatores de emissão pré‑definidos
- ✅ **Exibição de dicas ecológicas** conforme o nível de emissão (baixo, moderado, alto)
- ✅ **Layout responsivo** e visual personalizado com paleta de cores marrom/terrosa

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura da página
- **CSS3** – Estilização e responsividade (paleta de cores marrom)
- **JavaScript (ES6)** – Lógica de cálculo, manipulação do DOM e interatividade

## ⚙️ Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/flaviapaiva234/calculadora-ecotrip.git
   cd calculadora-ecotrip

2. **Abra o arquivo `index.html` no navegador** (ou utilize o Live Server do VS Code).

3. **Preencha os campos**:
   - **Distância (obrigatório)** – ex: `250`
   - **Meio de transporte** – escolha uma opção
   - **(Opcional) Origem e destino** – não utilizados no cálculo atual, mas reservados

4. **Clique em "Calcular emissão de CO₂"** – o resultado aparecerá imediatamente.

## 📂 Estrutura do Projeto

```text
calculadora-ecotrip/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js          # Fatores de emissão por transporte
│   ├── calculator.js      # Função de cálculo
│   ├── ui.js              # Atualização da interface e dicas
│   ├── app.js             # Evento do formulário e integração
│   └── routes-data.js     # (reservado para dados de rotas)
└── README.md
```

## 🧪 Exemplo de Uso

| Transporte | Distância (km) | Emissão (kg CO₂) |
|------------|----------------|------------------|
| Carro (gasolina) | 250 | 48.0 |
| Avião | 250 | 46.25 |
| Ônibus | 250 | 10.25 |
| Metrô | 250 | 7.75 |
| Bicicleta | 250 | 0.0 |

> Os fatores de emissão utilizados são estimativas médias com base em dados de referência ambiental.

## 🚀 Possíveis Melhorias

- Integração com **API de distâncias** (OpenRouteService, Google Maps) para calcular automaticamente a quilometragem a partir de origem e destino
- Inclusão de mais meios de transporte (motocicleta, navio, etc.)
- Gráfico comparativo de emissões entre diferentes opções de viagem
- Salvamento do histórico de consultas no `localStorage`

## 🎯 Objetivos e Resultados Esperados

Após a conclusão deste projeto, o estudante será capaz de:

- Estruturar uma aplicação web com HTML, CSS e JavaScript puro
- Implementar lógica de cálculo com base em dados predefinidos
- Criar uma interface responsiva e acessível
- Documentar um projeto de forma profissional

## 👩‍💻 Autora

**Flávia Paiva**  
🔎 Analista de QA Júnior | 🐞 Testes Manuais | 🌱 Sustentabilidade e Tecnologia

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/flaviapaiva234/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/flaviapaiva234)
