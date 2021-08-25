const Traveler = require("./Traveler")

class Doctor extends Traveler {
    constructor(name, isHealthy, food) {
        super(name, isHealthy, food)
    }

    heal(traveler) {
        traveler.isHealthy = true
    }
}

module.exports = Doctor;