// Lista de transportes com fatores de emissão (kg CO₂/km) e ícones
const transportes = [
    { id: "carro", nome: "Carro (gasolina)", icone: "🚗", fator: 0.192, descricao: "Médio porte" },
    { id: "carro_etanol", nome: "Carro (etanol)", icone: "🚗💨", fator: 0.062, descricao: "Renovável" },
    { id: "moto", nome: "Motocicleta", icone: "🏍️", fator: 0.080, descricao: "Média" },
    { id: "onibus", nome: "Ônibus", icone: "🚌", fator: 0.041, descricao: "Urbano/Interestadual" },
    { id: "aviao", nome: "Avião", icone: "✈️", fator: 0.185, descricao: "Doméstico" },
    { id: "trem", nome: "Trem", icone: "🚆", fator: 0.031, descricao: "Baixa emissão" },
    { id: "metro", nome: "Metrô", icone: "🚇", fator: 0.031, descricao: "Baixa emissão" },
    { id: "navio", nome: "Navio/Balsa", icone: "⛴️", fator: 0.120, descricao: "Emissão moderada" },
    { id: "caminhao", nome: "Caminhão", icone: "🚛", fator: 0.250, descricao: "Alta emissão" },
    { id: "bicicleta", nome: "Bicicleta", icone: "🚲", fator: 0.0, descricao: "Zero emissão" },
    { id: "caminhada", nome: "Caminhada", icone: "🚶", fator: 0.0, descricao: "Zero emissão" }
];