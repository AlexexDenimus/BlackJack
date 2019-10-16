const express = require('express');
const httpStatus = require('http-status');

const usersService = require('../services/usersService');
const router = express.Router();

/**
 GET /users
 */
async function getUsers(req, res, next) {
  try {
    const users = await usersService.fetchUsers(req.query);

    res.json({ users });
  } catch (error) {
    next(error);
  }
}

/**
 GET /users/:targetId
 */

async function getUser(req, res, next) {
  try {
    const user = await usersService.fetchUser(req.params.publicId);

    res.json(user);
  } catch (error) {
    next(error);
  }
}

/**
 POST /users
 */
async function postUser(req, res, next) {
  try {
    const user = await usersService.createUser(req.body);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

/**
 UPDATE /barbers/:targetId
 */

async function putUser(req, res, next) {
  try {
    const user = await usersService.updateUser(req.params.publicId, req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

/**
 DELETE /barbers/:targetId
 */
async function deleteUser(req, res, next) {
  try {
    const user = await usersService.deleteUser(req.params.publicId);
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (error) {
    next(error);
  }
}

/**
 * Initialize routes of articles controller.
 */

router.get('/', getUsers);

router.get('/:publicId', getUser);

router.post('/', postUser);

router.put('/:publicId', putUser);

router.delete('/:publicId', deleteUser);

module.exports = router;
