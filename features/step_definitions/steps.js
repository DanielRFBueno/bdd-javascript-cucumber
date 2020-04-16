const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function pratoDoDia (dia) {
    switch (dia) {
        case 'segunda-feira':
            return 'Virado a Paulista'
        case "terça-feira":
            return "Dobradinha"
        case "quarta-feira":
            return "Feijoada"
        case "quinta-feira":
            return "Macarrão"
        case "sexta-feira":
            return "Filé de Peixe"
    }
}

Given('que hoje é {string}', (dia) => {
    this.hoje = dia;
});

When('eu pergunto qual é o prato do dia', () => {
    this.valorObtido = pratoDoDia(this.hoje);
});

Then('a resposta deve ser {string}', (valorEsperado) => {
    assert.equal(this.valorObtido, valorEsperado);
});
