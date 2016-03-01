'use strict';

describe('intlyticsApp.version module', function() {
  beforeEach(module('intlyticsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
