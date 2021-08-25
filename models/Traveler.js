class Traveler {
    constructor(name, isHealthy, food) {
        this.name = name
        this.food = Number(food)
        this.isHealthy = isHealthy === 'true' ? true : false
    }

    hunt() {
        this.food += 2
        return `${this.name} hunted for 2 foods, ${this.food} foods left.`
    }

    eat() {
        if (this.food > 0) {
            this.food -= 1
            this.isHealthy = true
            return `${this.name} ate 1 food. ${this.food} food(s) left.`
        }
        else {
            this.food = 0
            this.isHealthy = false
            return `${this.name} doesn't have any food to eat. ${this.name} got sick.`
        }
    }
}

module.exports = Traveler;