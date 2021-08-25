# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo caçar e distribuir mantimentos
    Para que todos possam seguir viagem com mantimentos

    Contexto:
        Dado um Hunter de nome "Geralt"
        E ele sempre começa a viagem com 2 refeições
        E ele sempre começa a viagem com saúde.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter caçar 1 vezes
        Então o Hunter fica com 7 refeições

    Cenário: Comeu e seguiu saudável
        Quando o Hunter comer 1 vezes
        Então o Hunter fica com 0 refeições
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter comer 2 vezes
        Então o Hunter fica com 0 refeições
        E o Hunter ficará doente

    Cenário: Caçou, comeu e seguiu saudável
        Quando o Hunter caçar 2 vezes
        E o Hunter comer 2 vezes
        Então o Hunter fica com 8 refeições
        E o Hunter não ficará doente

    Cenário: Caçou e deu 2 refeições pra um Traveler
        Quando o Hunter caçar 1 vezes
        E o Hunter der 2 refeições pro Traveler
        Então o Hunter fica com 5 refeições
        E o Traveler fica com 4 refeições