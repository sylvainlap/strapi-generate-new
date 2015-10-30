'use strict';

/**
 * Expose main global config.
 */

module.exports = function dataForPackageJSON(scope) {

  return {
    'static': true,
    'views': false,
    'websockets': true,
    'favicon': {
      'path': 'favicon.ico',
      'maxAge': 86400000
    },
    'i18n': {
      'defaultLocale': 'en',
      'modes': [
        'query',
        'subdomain',
        'cookie',
        'header',
        'url',
        'tld'
      ],
      'cookieName': 'locale'
    },
    'prefix': '',
    'blueprints': {
      'defaultLimit': 30,
      'populate': true
    },
    'graphql': {
      'enabled': true,
      'route': '/graphql'
    },
    'studio': {
      'enabled': true,
      'secretKey': 'YOUR SECRET KEY HERE'
    },
    'dahboard': {
      'token': scope.dashboardToken
    },
    'globals': {
      'models': true,
      'strapi': true,
      'async': true,
      '_': true,
      'graphql': true
    },
    'users': {
      'jwtSecret': scope.jwtSecret
    },
    'smtp': {
      'from': scope.name + '<no-reply@' + scope.name + '.com>',
      'service': {
        'name': '',
        'user': '',
        'pass': ''
      }
    },
    'upload': {
      'folder': 'public/upload',
      'acceptedExtensions': ['*'],
      'headers': {},
      'highWaterMark': '',
      'fileHwm': '',
      'defCharset': '',
      'preservePath': '',
      'limits': {
        'fieldNameSize': '',
        'fieldSize': '',
        'fields': '',
        'fileSize': '',
        'files': '',
        'parts': '',
        'headerPairs': ''
      }
    }
  };
};
