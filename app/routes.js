var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

//import the person constructor
var person = require("./person.js");

module.exports = router

//create an applicant
var applicant = person.createPerson(
  this.age = undefined,
  this.multiBenefits = false,
  this.need = undefined,
  this.country = "england",
  this.gp = undefined,
  this.highlands = undefined,
  this.education = undefined,
  this.namedOnTaxCredits = undefined,
  this.claimsTaxCredits = false,
  this.incomeSupport = false,
  this.isPregnant = false,
  this.hasMatexCard = false,
  this.hasMedexCard = false,
  this.hasHealthCondition = false
);

var thisYear = 2020;
var parentTc = false;
var pregnancy = false;
var medicalEx = false;
var warPension = false;

var variText = {
    sightText : "sight test",
    setSightText : function() {
      if(applicant.country === "scotland") {
        this.sightText = "eye exam";
      }
    }
};

 	// GP country
   router.get(/country-handler/, function (req, res) {
    if (req.query.countryBeta  === 'englandgp'){
      res.redirect('gp-country');
    } else if (req.query.countryBeta  === 'scotlandgp') {
      applicant.country = "scotland";
    res.redirect('highlands-islands');
    } else if (req.query.countryBeta  === 'walesgp') {
      res.redirect('date-of-birth');
    } else {
      res.redirect('results/country-kickout-ni');
    }
  });

   	// highlands or islands
     router.get(/highlands-handler/, function (req, res) {
      if (req.query.highIslands === 'yes') {
      	applicant.highlands = "highlands";
	  	res.redirect('date-of-birth');
      } else {
        res.redirect('date-of-birth');
      }
    });

    //dob
    router.get(/dateofbirth-handler/, function (req, res) {
      applicant.age = (thisYear - req.query.dobyearBeta);
      console.log(applicant.age);
      if (applicant.age >= 20) {
        setPartnerText(applicant.partner);
        res.render('checker/1/partner', {
            'iwe' : iWe
        });
      } else if (applicant.age == 19) {
        res.redirect('partner');
      } else if (applicant.age >= 16) {
        res.redirect('full-time-education');
      } else if (applicant.age <= 15) {
        res.redirect('results/full-exemption-under-16');
      }
    });