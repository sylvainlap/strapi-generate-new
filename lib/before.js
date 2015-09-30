'use strict';

/**
 * Module dependencies
 */

// Node.js core.
const fs = require('fs');
const path = require('path');

// Public node modules.
const _ = require('lodash');

/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param {Object} scope
 * @param {Function} cb
 */

module.exports = function before(scope, cb) {

  // Use a reasonable default application name.
  let defaultName = scope.args[0];
  if (defaultName === '.' || !defaultName) {
    defaultName = path.basename(process.cwd());
  }

  // App info.
  _.defaults(scope, {
    name: defaultName,
    author: process.env.USER || 'An Strapi developer',
    email: process.env.EMAIL || '',
    year: (new Date()).getFullYear(),
    license: 'MIT'
  });

  // Make changes to the rootPath where the Strapi project will be created.
  scope.rootPath = path.resolve(process.cwd(), scope.name || '');

  // Ensure we aren't going to inadvertently delete any files.
  try {
    const files = fs.readdirSync(scope.rootPath);
    if (files.length) {
      return cb.error('Error: `$ strapi new` can only be called on an empty directory.');
    }
  } catch (e) {
    // ...
  }

  // Trigger callback with no error to proceed.
  return cb.success();
};
