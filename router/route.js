
const express = require("express")
const route = express.Router();
const Task = require('./../models/task');
const bodyParser = require('body-parser');





route.get('/task', async (req, res) => {
    console.log("Request comme from GET");
    try {
        await Task.find({}).then(result => {
            res.send(result)
        })
    } catch (err) {
        console.log(err)
    }
});
route.post('/ajouter', async (req, res) => {
    console.log("Request comme from POST");
    try {
        let new_task = new Task({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
        });
        await new_task.save();
        res.send('save valid');
    } catch (err) {
        console.log(err)
    }
});
route.delete('/delete/:id', async (req, res) => {
    console.log("Request comme from DELETE");
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.send("supprimer  avec succes")
    } catch (err) {
        res.send(err)
    }
});
route.put('/update/:id', async (req, res) => {
    console.log("Request comme from PUT");
    try {
        await Task.findOneAndUpdate(
            { _id: req.params.id },
            {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed,
            }
        );
        res.send("Modifier avec succès");
    } catch (err) {
        res.send(err)
    }
});


module.exports = route;
