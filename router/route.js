const express = require('express');
const route = express.Router();
const Task = require('./../models/task'); 
const bodyParser = require('body-parser');

route.get('/task',async (req,res)=>{
    try{
        
        await Task.find({}).then(resultat=>{
            res.send(resultat) 
        })

    }catch(err){
        console.log(err) 
    }
   
})

route.post('/Task',async (req,res)=>{
    try{ 
        const{name,description,statu}=req.body;
    let new_Task = new Task({
        name:req.body.name,
        description:req.body.description,
        completed:req.body.completed
    }) 
    await new_Task.save()
    res.send('ajoutter avec succes')
}catch(err){
    console.log(err)
}
})

route.delete('/delet/:id',async(req,res) => {
    await   Task.findByIdAndDelete(req.params.id)
    res.send("supprimer  avec succes")
   })


   route.put('/update/:idup', async (req, res) => {
    try {
        await Task.findOneAndUpdate(
            { _id: req.params.idup },
            {
                name: req.body.name,
                description: req.body.description,
                completed: req.body.completed,
            }
        );
        res.send("Modifier avec succès");
    } catch (err) {
        res.status(500).send(err); 
    }
});

  

module.exports=route