document.write('<h2 style="color: blue;">Resolução</h2><br>');

// Exemplo 2: Objeto contendo informações sobre um carro de luxo da Ferrari
let carroFerrari = {
    modelo: 'Beetle',
    ano: 1999,
    cor: ['Vermelho Salsa', 'Verde Mango Preto Ninja', 'Prata Sargas', 'Cinza Platinum', 'Branco Cristal'],
    potenciaMotor: 	'116 cv',
    preco: 'R$ 25.686',

};

// Exibir informações sobre o carro
document.write(`Modelo do carro: <strong>${carroFerrari.modelo}</strong><br>`);
document.write(`Modelo do carro: <strong>${carroFerrari.ano}</strong><br>`);
document.write(`Modelo do carro: <strong>${carroFerrari.cor[2]}</strong><br>`);
document.write(`Modelo do carro: <strong>${carroFerrari.potenciaMotor}</strong><br>`);
document.write(`Preço do carro: <strong>${carroFerrari.preco}</strong><br>`);


