const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/gestion").then(()=>console.log("done server!"))
.catch((err)=>console.log("error"));

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;



