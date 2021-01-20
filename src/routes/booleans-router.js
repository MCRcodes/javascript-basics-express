const express = require('express');

const router = express.Router();

const {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
} = require('../controllers/boolean-controllers');

router.post('/negate', negateController);

router.post('/truthiness', truthinessController);

router.get('/is-odd/:number', isOddController);

router.get('/:string/starts-with/:character', startsWithController);

module.exports = router;
