var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/featured', function(req, res, next) {
//   res.render('featuredProd', { title: 'Featured' });
// });

const eiserProdController = require('../controllers/eiserProd');

router.get('/featured', eiserProdController.getFeatured);

router.get('/new', eiserProdController.getNew);

router.get('/combined', eiserProdController.getCombined);

module.exports = router;
