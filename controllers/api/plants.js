const Plant = require('../../models/plant');

module.exports = {
    getAll,
    create,
    show,
    updateWatered,
    update,
    delete: deleteOne,
};

async function getAll(req, res) {
    const plants = await Plant.find({
       user: req.user._id
    }); 
    res.status(200).json(plants);
}

async function create(req, res) {
    req.body.user = req.user._id; // User --< Plant
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
}

async function show(req, res) {
    const plant = await Plant.findOne({ _id: req.params.id, user: req.user._id });
    res.status(200).json(plant);
}

async function updateWatered(req, res) {
    const wateredPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true  
    });
    res.status(200).json(wateredPlant);
}

async function update(req, res) {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.status(200).json(updatedPlant);
}

async function deleteOne(req, res) {
    const deletedPlant = await Plant.findByIdAndDelete(req.params.id, req.body.user);
    res.status(200).json(deletedPlant);
}