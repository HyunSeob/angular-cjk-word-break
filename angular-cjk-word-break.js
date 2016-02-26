(function(angular) {
  'use strict';

  angular.module('cjkWordBreak', [])
  .config(function ($filterProvider) {
    $filterProvider.register('cjkWordBreak', function($sce) {
      return function (text) {
        if (!text) return text;
        return $sce.trustAsHtml(text.split(/ +/g).map(function (word) {
          return '<span style="display: inline-block">' + word + '&nbsp;</span>';
        }).join(''));
      };
    });
  });
})(window.angular);
