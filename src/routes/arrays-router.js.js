const express = require('express');

const router = express.Router();

const {
  elementAtIndexController,
  toStringController,
  appendController,
  startsWithAVowelController,
  removeElementController,
} = require('../controllers/array-controllers');

router.post('/element-at-index/:index', elementAtIndexController);

router.post('/to-string/', toStringController);

router.post('/append', appendController);

router.post('/starts-with-vowel', startsWithAVowelController);

router.post('/remove-element', removeElementController);

module.exports = router;
