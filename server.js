const axios = require('axios');
const express = require("express");
require('dotenv').config()
const app = express();

app.use(express.json());
app.get('/autosuggest', async function (req, res) {
    const response = await axios({
        method: 'get',
        url: `${process.env.DEVELOPER_HERE_URL}&q=new&apiKey=${process.env.DEVELOPER_HERE_KEY}`,
    })
    console.log(response.data)
})
app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on http://localhost:5000")
    }
});