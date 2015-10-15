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
 * Expose main package JSON of the application
 * with basic info, dependencies, etc.
 */

module.exports = function dataForPackageJSON(scope) {
  const frameworkPkg = scope.strapiPackageJSON || {};
  const userPkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'strapi-generate-users', 'package.json'))) || {};

  // To determine the Strapi dependency to inject
  // in the newly created `package.json`.
  const strapiVersionDependency = '^' + frameworkPkg.version;

  return _.defaults(scope.appPackageJSON || {}, {
    'name': scope.name,
    'private': true,
    'version': '0.1.0',
    'description': 'A Strapi application.',
    'dependencies': {
      'anchor': getDependencyVersion(userPkg, 'anchor'),
      'async': getDependencyVersion(frameworkPkg, 'async'),
      'bcryptjs': getDependencyVersion(userPkg, 'bcryptjs'),
      'jsonwebtoken': getDependencyVersion(userPkg, 'jsonwebtoken'),
      'lodash': getDependencyVersion(frameworkPkg, 'lodash'),
      'nodemailer': getDependencyVersion(userPkg, 'nodemailer'),
      'passport-facebook': getDependencyVersion(userPkg, 'passport-facebook'),
      'passport-github': getDependencyVersion(userPkg, 'passport-github'),
      'passport-google-oauth': getDependencyVersion(userPkg, 'passport-google-oauth'),
      'passport-linkedin': getDependencyVersion(userPkg, 'passport-linkedin'),
      'passport-local': getDependencyVersion(userPkg, 'passport-local'),
      'passport-twitter': getDependencyVersion(userPkg, 'passport-twitter'),
      'sails-disk': getDependencyVersion(frameworkPkg, 'sails-disk'),
      'socket.io': getDependencyVersion(frameworkPkg, 'socket.io'),
      'strapi': strapiVersionDependency,
      'waterline': getDependencyVersion(frameworkPkg, 'waterline')
    },
    'devDependencies': {
      'strapi-generate': getDependencyVersion(frameworkPkg, 'strapi-generate'),
      'strapi-generate-admin': getDependencyVersion(frameworkPkg, 'strapi-generate-admin'),
      'strapi-generate-api': getDependencyVersion(frameworkPkg, 'strapi-generate-api'),
      'strapi-generate-new': getDependencyVersion(frameworkPkg, 'strapi-generate-new'),
      'strapi-generate-upload': getDependencyVersion(frameworkPkg, 'strapi-generate-upload'),
      'strapi-generate-users': getDependencyVersion(frameworkPkg, 'strapi-generate-users')
    },
    'main': './server.js',
    'scripts': {
      'start': 'node --harmony server.js'
    },
    'author': {
      'name': scope.author || 'A Strapi developer',
      'email': scope.email || '',
      'url': scope.website || ''
    },
    'maintainers': [{
      'name': scope.author || 'A Strapi developer',
      'email': scope.email || '',
      'url': scope.website || ''
    }],
    'engines': {
      'node': '>= 0.12.0',
      'npm': '>= 2.0.0'
    },
    'license': scope.license || 'MIT'
  });
};

/**
 * Get dependencies version
 */

function getDependencyVersion(packageJSON, module) {
  return (
    packageJSON.dependencies && packageJSON.dependencies[module] ||
    packageJSON.devDependencies && packageJSON.devDependencies[module]
  );
}
