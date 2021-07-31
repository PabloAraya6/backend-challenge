const get = (req, res, next) => {
    res.json({message: "GET TEST"});
};

module.exports = {get};