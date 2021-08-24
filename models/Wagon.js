class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }

    join(traveler) {
        if (this.capacity - this.passengers.length > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        const sick = this.passengers.find(({isHealthy}) => {
            if (!isHealthy) {
                return true
            }
            return false
        })
        return sick ? true : false
    }

    totalFood() {
        let total = 0
        this.passengers.filter(({food}) => {
            total += food
        })
        return total
    }
}

module.exports = Wagon;