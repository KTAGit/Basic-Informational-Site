import express from 'express'
const app = express()

app.listen(3000)


app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: '../front-end'})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: '../front-end'})
})


app.get('/contact-me', (req, res) => {
    res.sendFile('./contact-me.html', {root: '../front-end'})
})

app.use((req, res) => {
    res.status(404).sendFile('./404.html', {root: '../front-end'})
})




