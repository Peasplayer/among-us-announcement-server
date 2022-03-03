const express = require('express')
const app = express()

const defaultText = "<size=300%>Hello!</size>\n" +
    "It seems that the creator of this among us mod hasnt set up the custom among us announcement server, or there was an error!\n" +
    "check again later!\n" +
    "<i>If you are the creator of this mod, please check your announcements server</i>";
const announcement = null;

app.get("/amongus/announcement", (req, res) => {
    res.json({ data: { type: "announcement", attributes: { id: 0, text: announcement ?? defaultText } } })
})

app.listen(443, () => console.log("Server is up and running!"))