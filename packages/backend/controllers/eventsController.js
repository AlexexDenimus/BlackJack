const eventsService = require('../services/eventsService');
const express = require('express');
const httpStatus = require('http-status');
const router = express.Router();

const auth = require('../utils/middleware/auth');

/**
 GET /events
 */
async function getEvents(req, res, next) {
  try {
    const events = await eventsService.fetchEvents(req.query);

    res.json({ events });
  } catch (error) {
    next(error);
  }
}

/**
 GET /events/:targetId
 */

async function getEvent(req, res, next) {
  try {
    const event = await eventsService.fetchEvent(req.params.publicId);

    res.json(event);
  } catch (err) {
    next(err);
  }
}

/**
 POST /events
 */

async function postEvent(req, res, next) {
  try {
    await eventsService.createEvent(req.body, req.user);

    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    next(err);
  }
}

/**
 UPDATE /barbers/:targetId
 */

async function putEvent(req, res, next) {
  try {
    const event = await eventsService.updateEvent(req.params.publicId, req.body, req.user);
    res.json(event);
  } catch (error) {
    next(error);
  }
}

/**
 DELETE /barbers/:targetId
 */

async function deleteEvent(req, res, next) {
  try {
    await eventsService.deleteEvent(req.params.publicId, req.user);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

async function getDoneServices(req, res, next) {
  try {
    const services = await eventsService.fetchDoneServices();
    res.json(services);
  } catch (error) {
    next(error);
  }
}

/**
 * Initialize routes of articles controller.
 */

router.get('/', getEvents);

router.get('/:publicId', getEvent);

router.post('/', auth, postEvent);

router.put('/:publicId', auth, putEvent);

router.delete('/:publicId', auth, deleteEvent);

router.get('/services/done', getDoneServices);

module.exports = router;
