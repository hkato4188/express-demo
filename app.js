
import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 4000

//this is a callback
app.get('/wisdom', (req, res) => {
    try {



    } catch (error) {
        console.error('There was a problem fetching kanye:', error)
        res.status(500).json({ error: 'It did not work' });
    }

    res.send('We are on the wisdom page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})