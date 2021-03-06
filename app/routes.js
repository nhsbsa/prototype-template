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

   // tax-credits - NEED TO CHECK THIS
   router.get(/taxcredits-handler/, function (req, res) {
     var dobyearBeta = req.query.dobyearBeta;
    var age = (thisYear - req.query.dobyearBeta);
    console.log(age);
     

    if (req.query.taxcredits === 'yes') {
    
    res.redirect('do-you-get-paid-uc');

    } else if (req.query.taxcredits === 'no' && age <= 60) {
      res.redirect('pregnant');

    } else { res.redirect ('pregnant')
  }
  });



  //UC
  router.get(/getuc-handler/, function (req, res) {
    if (req.query.getuc == 'yes') {
      res.redirect('uc-claim-type');  
    } else if (req.query.getuc == 'no') {
      res.redirect('benefits-type');    
      
    } else {
      res.redirect('while-waiting-uc');
    }
});

// UC-type
router.get(/uc-type-handler/, function (req, res) {
  if (req.query.ucElement == 'yes') {
  res.redirect('uc-income-935');
  } else {
    res.redirect('uc-income-435');
  }
});

//UC 935
router.get(/uc-income-935-handler/, function (req, res) {
  if (req.query.ucIncome935 == 'yes') {
  res.redirect('../passport/full-exemption-uc-935');
  } else {
    res.redirect('#');
  }
});

//UC 935
router.get(/uc-income-435-handler/, function (req, res) {
  if (req.query.ucIncome435 == 'yes') {
  res.redirect('../passport/full-exemption-uc');
  } else {
    res.redirect('#');
  }
});


//benefits-type

router.get(/benefit-list-handler/, function (req, res) {

 

  if (req.query.benefitlist.includes('TC-benefit')) {
    res.redirect('tax-credit-type');
  } else if (req.query.benefitlist.includes('IS-benefit')) {
    res.redirect('../passport/full-exemption-benefits-income-support');
  } else if (req.query.benefitlist.includes('ESA-benefit')) {
    res.redirect('esa-type');
  } else if (req.query.benefitlist.includes('JSA-benefit')) {
    res.redirect('jsa-type');
  } else if (req.query.benefitlist.includes('PC-benefit')) {
    res.redirect('pension-credit-type');
  } else if (req.query.benefitlist.includes('none-benefit')) {
    res.redirect('pregnant');

  } else if (req.query.benefitlist.toString() == 'TC-benefit,IS-benefit') {
    res.redirect('../passport/full-exemption-benefits-income-support');
  } else if (req.query.benefitlist.toString() == 'TC-benefit,IS-benefit,ESA-benefit') {
    res.redirect('../passport/full-exemption-benefits-income-support');
  } else if (req.query.benefitlist.toString() == 'TC-benefit,IS-benefit,ESA-benefit,JSA-benefit') {
    res.redirect('../passport/full-exemption-benefits-income-support');
  } else if (req.query.benefitlist.toString() == 'TC-benefit,IS-benefit,ESA-benefit,JSA-benefit,PC-benefit') {
    res.redirect('../passport/full-exemption-benefits-income-support');
  } else if (req.query.benefitlist.toString() == 'TC-benefit,ESA-benefit') {
    res.redirect('tax-credit-type');
  
  } 
});

//pension-credit-type
router.get(/pension-credit-handler/, function (req, res) {


  if (req.query.pensioncredit == 'GConly') {
    res.redirect('#');
  } else if (req.query.pensioncredit == 'GCSC') {
    res.redirect('#');
  } else if (req.query.pensioncredit == 'SC') {
    res.redirect('#');
  
  }
});

//tax-credit types - NEED TO ADD AGE VARIABLE
router.get(/taxcredit-list-handler/, function (req, res) {


  if (req.query.taxcreditlist == 'WTC') {
    res.redirect('pregnant');
  
  } else {
    res.redirect('household-income');
  }
});


//pregnant
router.get(/pregnant-handler/, function (req, res) {


  if (req.query.pregnant == 'yes') {
    res.redirect('war-pension');
  
  } else {
    res.redirect('war-pension');
  }
});



//war-pension
router.get(/warpension-handler/, function (req, res) {
  var countryBeta = req.session.data ['countryBeta'];

  if (req.query.warpension == 'yes' && countryBeta == 'scotlandgp') {
    res.redirect('#');
  
  } else {
    res.redirect('diabetes');
  }
});



//diabetes
router.get(/diabetes-handler/, function (req, res) {
  var countryBeta = req.session.data ['countryBeta'];

  if (req.query.diabetes == 'no' && countryBeta != 'walesgp') {
    res.redirect('medical-list');
  } else if (countryBeta == 'walesgp' && req.query.diabetes == 'no'){
    res.redirect('glaucoma');

  } else {
    res.redirect('sugar-level');
  }
});


//medical-list
router.get(/medical-list-handler/, function (req, res) {


  if (req.query.medicalist == 'yes') {
    res.redirect('care-home');
  
  } else {
    res.redirect('care-home');
  }
});

//care-home
router.get(/carehome-handler/, function (req, res) {


  if (req.query.carehome == 'yes') {
    res.redirect('council-pay');
  
  } else {
    res.redirect('savings-16k');
  }
});

//Savings-16k
router.get(/savings16k-handler/, function (req, res) {


  if (req.query.savings16k == 'yes') {
    res.redirect('#');
  
  } else {
    res.redirect('#');
  }
});

//council pay for care home
router.get(/councilpay-handler/, function (req, res) {


  if (req.query.councilpay == 'yes') {
    res.redirect('#');
  
  } else {
    res.redirect('savings-23k');
  }
});

//esa type
router.get(/esa-handler/, function (req, res) {


  if (req.query.esa == 'IR') {
    res.redirect('../passport/full-exemption-esa-IR');
  
  } else {
    res.redirect('#');
  }
});