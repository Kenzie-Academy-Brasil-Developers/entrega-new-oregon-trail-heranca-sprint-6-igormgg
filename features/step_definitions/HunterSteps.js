const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const { cacador } = require("./../../app");
const { viajante } = require("./../../app");

/** GIVEN */

Given('um Hunter de nome {string}', function (string) {
    cacador.name = string
});

Given('ele sempre começa a viagem com {int} refeições', function (int) {
    cacador.food = int
});

Given('ele sempre começa a viagem com saúde.', function () {
    cacador.isHealthy = true
});

/** WHEN */

When('o Hunter caçar {int} vezes', function (int) {
    for (let contador = 0; contador < int; contador++) {
        cacador.hunt();
    }
});

When('o Hunter comer {int} vezes', function (int) {
    for (let contador=0; contador < int; contador++) {
        cacador.eat();
    }
});

When('o Hunter der {int} refeições pro Traveler', function (int) {
    cacador.giveFood(cacador, int)
    cacador.food -= int
    });

/** THEN */

Then('o Hunter fica com {int} refeições', function (int) {
    assert.strictEqual(cacador.food, int);
});

Then('o Hunter não ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, true)
});

Then('o Hunter ficará doente', function () {
    assert.strictEqual(cacador.isHealthy, false)
});

Then('o Traveler fica com {int} refeições', function (int) {
    viajante.food = int
});