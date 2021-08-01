const faker = require('faker')


const delivery = async (req, res, next) => {
    try {
        var distance = parseInt(faker.datatype.number({ min: 0, max: 2000 }))
        var num = parseInt(Math.abs(distance / 100))

        var a = 0, b = 1, aux
        while (num > 0) {
            aux = a
            a = a + b
            b = aux
            num--
        }

        let data
        if (a == 0) {
            data = `Delivery time is today`
        } else {
            data = `Delivery time is ${a} day(s)`
        }

        res.status(200).json({
            message: 'success',
            info: `Random distance [0km - 2000km]: ${distance} km`,
            data
        })
    } catch (error) {
        next(error)
    }
}

module.exports = delivery