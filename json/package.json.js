'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');

/**
 * Expose main package JSON of the application
 * with basic info, dependencies, etc.
 */

module.exports = function dataForPackageJSON(scope) {
  const frameworkPkg = scope.strapiPackageJSON || {};

  // To determine the Strapi dependency to inject
  // in the newly created `package.json`.
  const strapiVersionDependency = '^' + frameworkPkg.version;

  return _.defaults(scope.appPackageJSON || {}, {
    'name': scope.name,
    'private': true,
    'version': '0.1.0',
    'description': 'A Strapi application.',
    'dependencies': {
      'anchor': getDependencyVersion(frameworkPkg, 'anchor'),
      'async': getDependencyVersion(frameworkPkg, 'async'),
      'bcryptjs': getDependencyVersion(frameworkPkg, 'bcryptjs'),
      'jsonwebtoken': getDependencyVersion(frameworkPkg, 'jsonwebtoken'),
      'json-stringify-safe': getDependencyVersion(frameworkPkg, 'json-stringify-safe'),
      'lodash': getDependencyVersion(frameworkPkg, 'lodash'),
      'strapi': strapiVersionDependency,
      'nodemailer': getDependencyVersion(frameworkPkg, 'nodemailer'),
      'passport-facebook': getDependencyVersion(frameworkPkg, 'passport-facebook'),
      'passport-github': getDependencyVersion(frameworkPkg, 'passport-github'),
      'passport-google-oauth': getDependencyVersion(frameworkPkg, 'passport-google-oauth'),
      'passport-linkedin': getDependencyVersion(frameworkPkg, 'passport-linkedin'),
      'passport-local': getDependencyVersion(frameworkPkg, 'passport-local'),
      'passport-twitter': getDependencyVersion(frameworkPkg, 'passport-twitter'),
      'sails-disk': getDependencyVersion(frameworkPkg, 'sails-disk'),
      'socket.io': getDependencyVersion(frameworkPkg, 'socket.io'),
      'waterline': getDependencyVersion(frameworkPkg, 'waterline')
    },
    'devDependencies': {
      'strapi-generate': getDependencyVersion(frameworkPkg, 'strapi-generate'),
      'strapi-generate-admin': getDependencyVersion(frameworkPkg, 'strapi-generate-admin'),
      'strapi-generate-api': getDependencyVersion(frameworkPkg, 'strapi-generate-api'),
      'strapi-generate-new': getDependencyVersion(frameworkPkg, 'strapi-generate-new'),
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
      'node': '>= 4.0.0',
      'npm': '>= 3.0.0'
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