const express = require('express');
const httpStatus = require('http-status');

const router = express.Router();
const servicesService = require('../services/servicesService');

/**
 GET /services
 */
async function getServices(req, res, next) {
  try {
    const services = await servicesService.fetchServices(req.query);

    res.json({ services });
  } catch (error) {
    next(error);
  }
}

/**
 GET /services/:targetId
 */

async function getService(req, res, next) {
  try {
    const service = await servicesService.fetchService(req.params.publicId);

    res.json(service);
  } catch (err) {
    next(err);
  }
}

/**
 POST /services
 */

async function postService(req, res, next) {
  try {
    await servicesService.createService(req.body);

    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    next(err);
  }
}

/**
 UPDATE /service/:targetId
 */

async function putService(req, res, next) {
  try {
    const service = await servicesService.updateService(req.params.publicId, req.body);
    res.json(service);
  } catch (error) {
    next(error);
  }
}

/**
 DELETE /barbers/:targetId
 */

async function deleteService(req, res, next) {
  try {
    await servicesService.deleteService(req.params.publicId);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

/**
 * Initialize routes of articles controller.
 */

router.get('/', getServices);

router.get('/:publicId', getService);

router.post('/', postService);

router.put('/:publicId', putService);

router.delete('/:publicId', deleteService);

module.exports = router;
