# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os viajantes
    Para que todos possam seguir a viagem saudáveis.

    Contexto:
        Dado um Doctor de nome "Rey"
        E ele sempre começa a viagem com 1 comida
        E ele sempre começa a viagem sadio.

    Cenário: Caçou para conseguir mais refeições
        Quando o Doctor sair para caçar 1 vezes
        Então a quantidade de comida deve ser igual a 3

    Cenário: Curou o Traveler doente
        Quando um Traveler ficar doente
        E o Doctor cura o Traveler
        Então o Traveler ficará saudável