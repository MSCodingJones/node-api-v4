const express = require('express')
const server = express()

const PORT = process.env.PORT || 3000


// import helmet
const helmet = require('helmet')

//import router
const router = require('./app/routes/router')

// increase security security using helmet
server.use(helmet())
server.use(express.json())
server.use('/', router)

// Root route
server.get('/api', (req, res)=>  {
    res.json({
        'All Albums': `http://localhost:${PORT}/api/album`,
        'All Artists': `http://localhost:${PORT}/api/artist`,
        'All Bands': `http://localhost:${PORT}/api/bands`,
        'All Labels': `http://localhost:${PORT}/api/label`,
        'All Genres': `http://localhost:${PORT}/api/genre`
    })
})


server.listen(PORT, ()=> console.log(`PORTY over here in room ${PORT}`))