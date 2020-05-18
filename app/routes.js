var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here


module.exports = router


var thisYear = 2020;





 	// Country
   router.get(/country-handler/, function (req, res) {
    if (req.query.countryBeta  === 'englandgp'){
      res.redirect('gp-country');
    } else if (req.query.countryBeta  === 'scotlandgp') {
      
    res.redirect('highlands-islands');
    } else if (req.query.countryBeta  === 'walesgp') {
      res.redirect('date-of-birth');
    } else {
      res.redirect('../kickout/country-kickout-ni');
    }
  });

   	// highlands or islands
     router.get(/highlands-handler/, function (req, res) {
      if (req.query.highIslands === 'yes') {
      
	  	res.redirect('date-of-birth');
      } else {
        res.redirect('date-of-birth');
      }
    });


	// GP in Scotland or Wales
  router.get(/gp-handler/, function (req, res) {
    if (req.query.gpScotWales === 'yes') {
      
    res.redirect('date-of-birth');
    } else {
      res.redirect('date-of-birth');
    }
  });
    

     // dob-handler
     router.get(/dateofbirth-handler/, function (req, res) {
      var age = (thisYear - req.query.dobyearBeta);
      console.log(age);
      if (age >= 20) {
        res.redirect('partner');
      }
        else if (age == 19) {
          res.redirect('partner');
      } else if (age >= 16) {
        res.redirect('full-time-education');
      } else if (age <= 15) {
        res.redirect('../passport/full-exemption-under-16');
      }
    });
 
 	// FTE
   router.get(/fte-higher-handler/, function (req, res) {
    if (req.query.ftehigher === 'yes') {
    
    res.redirect('../passport/full-exemption-fte');
    } else {
      res.redirect('partner');
    }
  });
  
  // partner
  router.get(/partner-handler/, function (req, res) {
    if (req.query.partner === 'yes') {
    
    res.redirect('#');
    } else {
      res.redirect('tax-credits');
    }
  });

   // tax-credits
   router.get(/taxcredits-handler/, function (req, res) {
    if (req.query.taxcredits === 'yes') {
    
    res.redirect('do-you-get-paid-uc');
    } else {
      res.redirect('#');
    }
  });

  //UC
  router.get(/getuc-handler/, function (req, res) {
    if (req.query.getuc == 'yes') {
      res.redirect('uc-claim-type');  
    } else if (req.query.getuc == 'no') {
      res.redirect('#');    
      
    } else {
      res.redirect('while-waiting-uc');
    }
});

// UC-type
router.get(/uc-type-handler/, function (req, res) {
  if (req.query.ucElement === 'yes') {
  res.redirect('uc-income-935');
  } else {
    res.redirect('uc-income-435');
  }
});

//UC 935
router.get(/uc-income-935-handler/, function (req, res) {
  if (req.query.ucIncome935 === 'yes') {
  res.redirect('../passport/full-exemption-uc-935');
  } else {
    res.redirect('#');
  }
});

//UC 935
router.get(/uc-income-435-handler/, function (req, res) {
  if (req.query.ucIncome435 === 'yes') {
  res.redirect('../passport/full-exemption-uc');
  } else {
    res.redirect('#');
  }
});