var express = require('express');
var router = express.Router();
var Contact = require('../models/contacts.js');

//get all contacts
router.get('/contacts', function(req, res, next) {
  Contact.find(function(err, contacts) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(contacts);
    }
  });
});

//get single contact
router.get('/contact/:id', function(req, res, next) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(contact);
    }
  });
});

//post all contacts
router.post('/contacts', function(req, res, next){
  var newContact = new Contact({
    name: req.body.name,
    address: req.body.address,
    profession: req.body.profession
  });
  newContact.save(function(err, contacts){
    if (err) {
      res.json({'message': err});
    } else {
      res.json(contacts);
    }
  });
});

//put one contact
router.put('/contact/:id', function(req, res, next) {
  Contact.findByIdAndUpdate(function(err, contact) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(contact);
    }
  });
});

//delete one contact
router.delete('/contact/:id', function(req, res, next) {
  Contact.findByIdAndRemove(function(err, contacts) {
    if (err) {
      res.json({'message': err});
    } else {
      res.json(contacts);
    }
  });
});

module.exports = router;
