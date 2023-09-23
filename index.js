const app = require('express')()
const port = process.env.PORT || 3000

app.get(`/`, (req, res) => {
    res.send("Home Page")
})

app.get(`/diogo`, (req, res) => {
    res.send("Diogo Page")
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
