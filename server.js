const express = require("express")
const path = require("path")

const PORT = process.env.PORT || 8443

const app = express()

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get('/', (req, res) => {
    res.send('Stopwatch by XZ')
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})
