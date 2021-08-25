const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { doutor } = require("./../../app");
const { viajante } = require("./../../app");

/** GIVEN */

Given('um Doctor de nome {string}', function (string) {
    doutor.name = string
});

Given('ele sempre começa a viagem com {int} comida', function (int) {
    doutor.food = int;
});

Given('ele sempre começa a viagem sadio.', function () {
    doutor.isHealthy = true;
});

/** WHEN */

When('o Doctor sair para caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        doutor.hunt();
    }
    console.log(this.food)
});

When('um Traveler ficar doente', function () {
    viajante.isHealthy = false
});

When('o Doctor cura o Traveler', function () {
    doutor.heal(viajante)
});

/** THEN */

Then('a quantidade de comida deve ser igual a {int}', function (int) {
    assert.strictEqual(doutor.food, int);
});

Then('o Traveler ficará saudável', function () {
    assert.strictEqual(viajante.isHealthy, true)
});