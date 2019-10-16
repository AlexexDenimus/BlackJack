const express = require('express');
const httpStatus = require('http-status');
const barbersService = require('../services/barbersService');

const router = express.Router();

/**
 GET /barbers
 */
async function getBarbers(req, res, next) {
  try {
    const barbers = await barbersService.fetchBarbers(req.query);

    res.json({ barbers });
  } catch (error) {
    next(error);
  }
}

/**
 GET /barbers/:targetId
 */
async function getBarber(req, res, next) {
  try {
    const barber = await barbersService.fetchBarber(req.params.publicId);

    res.json(barber);
  } catch (error) {
    next(error);
  }
}

/**
 POST /barbers
 */

async function postBarber(req, res, next) {
  try {
    await barbersService.createBarber(req.body);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    next(error);
  }
}

/**
 UPDATE /barbers/:targetId
 */

async function putBarber(req, res, next) {
  try {
    const barber = await barbersService.updateBarber(req.params.publicId, req.body);

    res.json(barber);
  } catch (err) {
    next(error);
  }
}

/**
 DELETE /barbers/:targetId
 */

async function deleteBarber(req, res, next) {
  try {
    await barbersService.deleteBarber(req.params.publicId);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    next(error);
  }
}

/**
 * Initialize routes of articles controller.
 */
router.get('/', getBarbers);

router.get('/:publicId', getBarber);

router.post('/', postBarber);

router.put('/:publicId', putBarber);

router.delete('/:publicId', deleteBarber);

module.exports = router;
