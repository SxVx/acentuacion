const express = require('express')
const router = express.Router()

const test = require('../feature/test/test.route')
const theoreticalMaterial = require('../feature/theoretical-material/theoretical-material.route')
const strategyRead = require('../feature/strategyRead/strategy-read.route')
const strategyRelationship = require('../feature/strategyRelationship/strategy-relationship.route')

router.use('/test', test)
router.use('/theoretical-material', theoreticalMaterial)
router.use('/strategy-read', strategyRead)
router.use('/strategy-relationship', strategyRelationship)

router.use(async (req, res, next) => {
  return res.status(404).json({ status: false, message: `Route not Found : "${req.url}"` })
})

module.exports = router
