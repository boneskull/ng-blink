/* global angular */
(function () {
  'use strict';

  // CSS3 stuff I don't understand
  var KEYFRAMES = [
    '@keyframes blink {',
    'to { visibility: hidden; }',
    '}',
    '@-webkit-keyframes blink {',
    'to { visibility: hidden; }',
    '}'
  ];

  angular.module('ng.blink', [])
    .config(function () {
      // stuffs a <style> tag with the keyframes into the <head>
      var tag = angular.element('<style type="text/css"></style>')
        .text(KEYFRAMES.join('\n'));
      window.document.getElementsByTagName('head')[0].appendChild(tag[0]);
    })
    .directive('blink', function () {
      return {
        restrict: 'E',
        compile: function compile(tElm, tAttrs) {
          var frequency = tAttrs.frequency || '1s',
            style = 'blink ' + frequency + ' steps(5, start) infinite';

          // I tested this like twice in Safari, so who knows.
          tElm.css('animation', style)
            .css('-webkit-animation', style)
            // I think Opera supported this at one time
            .css('text-decoration', 'blink');
        }
      };
    });
})();
