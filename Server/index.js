// importlarim
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const eatUrl = process.env.URL
console.log(eatUrl);

// port
const port = 3000

const Schema = mongoose.Schema

const EatSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    info: { type: String, required: true },
    price: { type: Number, required: true }
});

const Eates = mongoose.model('Eat', EatSchema);


app.get('/', async (req, res) => {
    try {
        const allEat = await Eates.find({})
        res.send(allEat)
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const eat=await Eates.findById(id)
        res.send(eat)
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

app.post('/', async (req, res) => {
    try {
        const eat = new Eates(req.body)
        await eat.save()
        res.send(eat)
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

app.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const eat=await Eates.findByIdAndDelete(id)
        res.status(200).json({ messaage: "deleted" })
    } catch (error) {
        res.status(500).json({ messaage: error })

    }

})

mongoose.connect(eatUrl)
    .then(() => console.log('Connected!'))
    .catch(err => console.log("db not connect" + err))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})