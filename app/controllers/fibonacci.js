var bigNumber = {};

bigNumber.digitArrayAdd = function(digits1, digits2) {
    var sumDigits = [];
    var length = digits1.length > digits2.length ? digits1.length : digits2.length;
    
    for(var i = 0; i < length; i++){
        sumDigits[i] = (digits1[i] || 0) + (digits2[i] || 0) + (sumDigits[i] || 0);
        bigNumber.rebalanceDigitArray(sumDigits, i);
    }
    
    return sumDigits;
}

bigNumber.rebalanceDigitArray = function(digits, index) {
    var digit = digits[index];
    while (digit > 9) {
        digits[index] = digit % 10;

        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
}
var getFirstFibTermNumberWithDigits = function(n) {
    if (n <= 1) {
        return 1;
    }

    var previous = [1];
    var current = [1];
    var counter = 2;

    while (current.length < n) {
        var temp = current;
        current = bigNumber.digitArrayAdd(previous, current);
        previous = temp;
        counter++;
    }
    const fibonacci_number = current.reverse().toString().replace(/,/g, '')
    return counter;
};

const fibonacci = async (req, res, next) => {
    try {
        const n = req.query.n
        let result
        if(n !== undefined) {
            result = getFirstFibTermNumberWithDigits(n)
        } else {
            result = getFirstFibTermNumberWithDigits(1000)
        }
        res.status(200).json({ message: 'success', info: 'fibonacci term', data: result })
    } catch (error) {
        next(error)
    }
}

module.exports = fibonacci
