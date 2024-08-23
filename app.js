
import express from 'express'
import fetch from 'node-fetch'

const app = express()
const port = 4000

//this is a callback
app.get('/wisdom', async (req, res) => {
    try {

        const response = await fetch('https://api.kanye.rest/')
        const data = await response.json()

        res.json(data)

    } catch (error) {
        console.error('There was a problem fetching kanye:', error)
        res.status(500).json({ error: 'It did not work' });
    }


    //fetch this endpoint
    // fetch('https://api.kanye.rest/')
    //     .then((response) => {
    //         if(!response.ok){
    //             throw new Error('this did not work');
    //         }
    //         return response
    //     })
    //     .then((data) => {
    //         return data.json()
    //     })
    //     .then((quoteObj) =>{
    //         return quoteObj
    //     })
    //     .then((quote) =>{
    //         console.log(quote["quote"])
    //     })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})