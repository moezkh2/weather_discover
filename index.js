const axios = require('axios');
const express = require("express");
const cors = require('cors');
const path = require("path");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/autosuggest/:at', async function (req, res) {

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

app.get('/api/weather/:lat/:lng', async (req, res) => {
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

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on http://localhost:5000")
    }
});
module.exports = app;