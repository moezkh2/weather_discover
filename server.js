const axios = require('axios');
const express = require("express");
require('dotenv').config()
const app = express();

/* app.use(express.json()); */
app.get("/autosuggest/:at", async function (req, res) {

    try {

        const response = await axios({
            method: 'get',
            url: `${process.env.DEVELOPER_HERE_URL}&limit=5&lang=en&q=${req.params.at}&apiKey=${process.env.DEVELOPER_HERE_KEY}`,
        })

        const addresses = response.data.items.map((item) => { return [item.address.label, item.position] });

        res.send(addresses)


    } catch (error) {
        console.log("can't get seggestions")
    }

})

app.get('/weather/:lat/:lng', async (req, res) => {
    try {

        const response = await axios({
            method: 'get',
            url: `${process.env.OPEN_WEATHER_MAP_URL}&lat=${req.params.lat}&lon=${req.params.lng}&appid=${process.env.OPEN_WEATHER_MAP_KEY}`,
        })
        res.send(response.data)

    } catch (error) {

        console.log("can't get weather")

    }

})

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on http://localhost:5000")
    }
});