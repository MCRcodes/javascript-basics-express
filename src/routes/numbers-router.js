const express = require('express');

const router = express.Router();

const {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
} = require('../controllers/numbers-controllers');

router.get('/add/:a/and/:b', addController);

router.get('/subtract/:a/from/:b', subtractController);

router.post('/multiply', multiplyController);

router.post('/divide', divideController);

router.post('/remainder', remainderController);

module.exports = router;
