const EiserProduct = require('../models/eiserProd');

exports.getFeatured =  (req, res, next) => {
    EiserProduct.fetchFeatured()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('featuredProd', { 
            data: rows,
            title: 'Featured Product' 
        });
    })
};


exports.getNew =  (req, res, next) => {
    EiserProduct.fetchNew()
    .then( ([rows]) => {
        console.log(JSON.stringify(rows));
        //res.send(JSON.stringify(rows));
        res.render('newProd', { 
            data: rows,
            title: 'New Product' 
        });
    })
};


exports.getCombined = async (req, res, next) => {

  let featuredProd;
  let newProd;


  try {
    const get = await EiserProduct.fetchFeatured()
      .then(([rows]) => {
        featuredProd = rows;
      })

    const getTeam = await EiserProduct.fetchNew()
      .then(([rows]) => {
        newProd = rows;
      })

    // console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('combinedProd', {
      ftitle: 'Featured Product',
      fdata: featuredProd,
      ntitle: 'New Product',
      ndata: newProd
    });

  } catch (err) {
    console.log(err);
  };

};