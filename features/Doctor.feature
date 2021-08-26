# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curar os viajantes
    Para que todos possam seguir a viagem saudáveis.

    Contexto:
        Dado um Doctor de nome "Rey"
        E ele sempre começa a viagem com 1 comida
        E ele sempre começa a viagem sadio.

    Cenário: Curou o Traveler doente
        Quando um Traveler ficar doente
        E o Doctor cura o Traveler
        Então o Traveler ficará saudável

    Cenário: Comeu, ficou doente e se curou
        Quando o Doctor comer 2 vezes
        Então o Doctor fica doente
        Quando o Doctor cura o Doctor
        Então o Doctor ficará saudável
