const Router = require('express').Router;

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ status: 'actuve' });
});

module.exports = router;
