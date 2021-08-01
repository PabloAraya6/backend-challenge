const faker = require('faker')


const delivery = async (req, res, next) => {
    try {
        var distance = parseInt(faker.datatype.number({min:0, max:2000}))
        var num = parseInt(Math.abs(distance/100))

        var a = 0, b = 1, aux
        while (num > 0) {
            aux = a
            a = a + b
            b = aux
            num--
        }
        res.status(200).json({
            message:'success',
            info: [
                `Random distance [0km - 2000km]: ${distance} km`,
                ``
            ],
            data: `Delivery time is ${a} days`
        })
    } catch (error) {
        next(error)        
    }
}

module.exports = delivery