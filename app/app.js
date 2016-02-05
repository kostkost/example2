(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('ksc-app-projects', []).controller('ProjectsListCtrl', ['$scope', function ($scope) {
  $scope.q = {
    type: []
  };

  $scope.makeq = function (value, index, array) {
    var active_filters = $scope.q;

    return active_filters.type.indexOf(value.type) < 0;
  };

  $scope.filters = [{
    url: '/#',
    picture: "/theme/images/icons/Innovative.png",
    name: 'Інноваційне середовище',
    type: 1
  }, {
    url: '/#',
    picture: "/theme/images/icons/E-governance.png",
    name: 'Е-урядування',
    type: 2
  }, {
    url: '/#',
    picture: "/theme/images/icons/Healthcare.png",
    name: 'Медицина',
    type: 3
  }, {
    url: '/#',
    picture: "/theme/images/icons/safety.png",
    name: 'Безпека',
    type: 4
  }, {
    url: '/#',
    picture: "/theme/images/icons/Transport.png",
    name: 'Інноваційний транспорт',
    type: 5
  }, {
    url: '/#',
    picture: "/theme/images/icons/utilities.png",
    name: 'Якісні послуги',
    type: 6
  }];

  $scope.projects = [{
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 3
  }, {
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 4
  }, {
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 4
  }, {
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 1
  }, {
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 5
  }, {
    title: 'Kyiv Smart City School',
    href: '#',
    picture: '/theme/images/projects/12591774_1313580931989135_1084266575_o.jpg',
    type: 2
  }];

  $scope.addFilter = function (i) {
    var f = $scope.filters[i];
    var type_filter = $scope.q.type;
    f.active = !f.active;

    if (f.active) {
      type_filter.push(f.type);
    } else {
      var i = type_filter.indexOf(f.type);
      if (i >= 0) type_filter.splice(i, 1);
    }

    console.log(i, f);
  };
}]);

},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
  API_URL: 'http://n4bcak3.me:24024'
};

},{}],3:[function(require,module,exports){
(function (global){
'use strict';

global.config = require('./config');

require('./components/projects.js');

angular.module('ksc-app', ['ksc-app-projects']).run([function () {
  console.log('kyiv-smart-city-app');
}]);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/projects.js":1,"./config":2}],4:[function(require,module,exports){
'use strict';

// import modules
// require('./common');
require('./core');

// slick slider plugin
$(function () {
  $('.hero-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});
$(function () {
  $('.slider-team').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  });
});

//  bootstrap plugins
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

if ($(".quote").length) {
  var bottom_sidebar = $(document).height() - $('.quote').offset().top + 10;
  if ($(document).width() > 768) {
    $('#myAffix').affix({
      offset: {
        top: 100,
        bottom: bottom_sidebar
      }
    });
  }
}

// wow.js plugin
new WOW().init();

// Easy Scrool to #id
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});

// back to top
$(document).ready(function () {

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > document.documentElement.scrollHeight - 1500) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});

// Count numbers
if ($(".Count").length) {
  $(function () {
    var offset = $('.Count').offset();
    var ConutNeedStart = true;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset.top - $(this).height() * 1.3 && ConutNeedStart) {
        $('.Count').each(function () {
          var $this = $(this);
          jQuery({
            Counter: 0
          }).animate({
            Counter: $this.text()
          }, {
            duration: 2500,
            easing: 'swing',
            step: function step() {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        ConutNeedStart = false;
      }
    });
  });
}

},{"./core":3}]},{},[4])


//# sourceMappingURL=app.js.map
