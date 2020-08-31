'use strict';

const Joi = require('@hapi/joi');


exports.outputs = {
  notifications: Joi.object({
      count: Joi.number(),
      notifications: Joi.array().items(
          Joi.object({
              id: Joi.string(),
              title: Joi.string(),
              body: Joi.string(),
              viewed: Joi.boolean()
          })
      )
  })
};