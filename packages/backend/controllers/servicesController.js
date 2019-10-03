const servicesService = require('../services/servicesService');
const express = require('express');
const router = express.Router();

/**
 GET /services
 */
async function fetchServices(req, res, next) {
  try {
    const services = await servicesService.fetchServices();

    res.json({ services });
  } catch (error) {
    next(error);
  }
}

/**
 GET /barbers/:targetId
 */

/**
 POST /barbers
 */

/**
 UPDATE /barbers/:targetId
 */

/**
 DELETE /barbers/:targetId
 */

/**
 * Initialize routes of articles controller.
 */

router.get('/', fetchServices);

module.exports = router;
