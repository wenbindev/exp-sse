const app = require("express")();
const path = require('path');

const port = process.env.PORT || 8080;
app.get("/", (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res)
})

function send(res) {
    const timeStamp = new Date().getTime()
    console.log('sending...', timeStamp)
    res.write(`data: ${timeStamp}\n\n`)
    setTimeout(() => send(res), 1000)
}

app.listen(port)
console.log(`Server started at http://localhost:${port}`)