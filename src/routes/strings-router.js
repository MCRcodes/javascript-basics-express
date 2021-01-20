const express = require('express');

const router = express.Router();

const {
  sayHelloController,
  uppercaseController,
  lowercaseController,
  firstCharactersController,
} = require('../controllers/strings-controllers');

router.get('/hello/:string', sayHelloController);

router.get('/upper/:string', uppercaseController);

router.get('/lower/:string', lowercaseController);

router.get('/first-characters/:string', firstCharactersController);

module.exports = router;
