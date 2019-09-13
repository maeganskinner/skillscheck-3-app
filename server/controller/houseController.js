

Function addHouse(req, res) {
    const { name, price, image, address, city, state, zipcode} = req.body;
    const db = req.app.get("db");
    db.addHouse(name, price, image).then(response => {
        console.log(response);
        res.sendStatus(200);
    })
}

function getHouse(req, res) {
    const db = req.app.get("db");
    if (req.query.house !== undefined) {
        db.getHouse.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}
function deleteHouse(req, res) {
    const db = req.app.get("db");
    if (req.query.product !== undefined) {
        db.deleteHouse.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}


module.exports = {
    getHouse,
    addHouse,
    deleteHouse,
}