$(document).ready(function() {
  //activate wow.js
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false,
    live: true // default
  })
  wow.init();

  //activate fullpage.js
  $('#fullpage').fullpage({
    scrollBar: true,
    navigation: true,
    navigationTooltips: ['Intro', 'Problem', 'Picolo1', 'Picolo2', 'Roadmap', 'Token sale', 'Team'],
    loopBottom: false,
    loopTop: false,
    lazyLoading: true,
    sectionSelector: 'section',
    responsiveWidth: 5000
    // onLeave: function(index, nextIndex, direction) {
    //   if (index < 5 && index != 3 && index != 4) {
    //     $('#particles' + index).fadeOut();
    //     pjsindex = index - 1;
    //     var millisecondsToWait = 200;
    //     setTimeout(function() {
    //       cancelRequestAnimFrame(pJSDom[pjsindex].pJS.fn.checkAnimFrame);
    //       cancelRequestAnimFrame(pJSDom[pjsindex].pJS.fn.drawAnimFrame);
    //       pJSDom[pjsindex].pJS.fn.particlesEmpty();
    //       pJSDom[pjsindex].pJS.fn.canvasClear();
    //     }, millisecondsToWait);
    //   }
    // },
    // afterLoad: function(anchorLink, index) {
    //   if (index < 5 && index != 3 && index != 4) {
    //     pjsindex = index - 1;
    //     console.log(index, pjsindex);
    //     $('#particles' + index).fadeIn(300)
    //     pJSDom[pjsindex].pJS.fn.vendors.start();
    //   }
    // }
  });
  //$.fn.fullpage.setAutoScrolling(true);

  //apply color to each section from array
  int = -1;
  //color_array = ['-webkit-linear-gradient(45deg,#4f00bc,#8c8cf7)', '#FFFFFF', '-webkit-linear-gradient(45deg,#f46542,#F28D11)', '-webkit-linear-gradient(45deg,#FEC848,#E6BB3F)'];

  $('section').each(function() {
    int++
    //$(this).addClass('grid-item-' + int).css('background', color_array[int]);
    $(this).addClass('grid-item-' + int);
  });

  $('#fullpage').css("visibility", "visible");

  //roadmap timeline
  var timelineBlocks = $('.cd-timeline-block'),
    offset = 1.2;

  //hide timeline blocks which are outside the viewport
  hideBlocks(timelineBlocks, offset);

  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function() {
    (!window.requestAnimationFrame) ?
    setTimeout(function() {
      showBlocks(timelineBlocks, offset);
    }, 100): window.requestAnimationFrame(function() {
      showBlocks(timelineBlocks, offset);
    });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function() {
      ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function() {
      ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }

});
