'use strict';

/**
 * Expose dashboard config
 */

module.exports = function dataForDashboardJSON(scope) {
  return {
    'dashboard': {
      'enabled': true,
      'token': scope.dashboardToken
    }
  };
};
