'use strict';

angular.module('intlyticsApp.version', [
  'intlyticsApp.version.interpolate-filter',
  'intlyticsApp.version.version-directive'
])

.value('version', '0.1');
