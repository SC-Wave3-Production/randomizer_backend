import Express from 'express'
let data = {}
const router = Express.Router()

router.get('/get-data', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.json(data)
})

router.post('/randomize', (req, res, next) => {
    const result = Math.round(100 * Math.random()).toString(10)
    data = { ...data, [req.body.name]: result}
    res.json(data)
})

router.delete('/clear', (req, res, next) => {
    data = {}
    res.json(data)
})

export default router