const express = require('express')
const router = express.Router()

//build indivdual routes
router.use('/album', require('./api/albumRoutes'))

router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home Page',
        name: 'My Albums'
    })
})

router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404)', {
            title: '404 Error',
            name: 'this page does not exist'
        })
    }
})

module.exports = router