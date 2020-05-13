const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ status: 'hello' });
});

module.exports = router;
