Function addHouset(req, res) {
    const { name, price, image,
address,
    city = "city",
    state = "state",
    zipcode = "zipcode" } = req.body;
    const db = req.app.get("db");
    db.addHouse(name, price, image).then(response => {
        console.log(response);
        res.sendStatus(200);
    })
}

function getProduct(req, res) {
    const db = req.app.get("db");
    if (req.query.product !== undefined) {
        db.getProduct.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}
function deleteProduct(req, res) {
    const db = req.app.get("db");
    if (req.query.product !== undefined) {
        db.deleteProduct.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}
function editProduct(req, res) {
    const db = req.app.get("db");
    if (req.query.product !== undefined) {
        db.editProduct.req.query.name).then(response => {
            res.status(200).json(response);
        })
    }
}

module.exports = {
    getProduct,
    addProduct,
    deleteProduct,
    editProduct
}