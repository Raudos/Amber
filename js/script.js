var $button = $(".button");
var $person = $(".person");
var $hover = $(".hover");

//thank you stackoverflow
//http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
    });
};
$.fn.animateRotateReturn = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 360}).animate({deg: angle}, args);
    });
};
//------------------------------------------------------------------
//                    FUNCTIONS
//------------------------------------------------------------------

function $slideMenu() {
  $button.on("mouseenter", function() {
    $(this).children(":nth-child(1)").animate({
      height: "100%"
    }, 300);
  });
  $button.on("mouseleave", function() {
    $(this).children(":nth-child(1)").animate({
      height: "20%"
    }, 500);
  });
}
function $adjustHeight() {
  $person.css("height", $person.width() + "px");
}
function $hoverPerson() {
  $person.hover(function() {
    $(this).children(".hover").toggle();
    $(this).children(".about").toggle();
  });
}
function $animateChart() {
  $(".graph:nth-child(1)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-300, 500, "linear");
  });
  $(".graph:nth-child(3)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-240, 500, "linear");
  });
  $(".graph:nth-child(5)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-315, 500, "linear");
  });
  $(".outer").on("mouseleave", function() {
    $(this).children("img").animateRotateReturn(0, 500, "linear");
  })
}
function $showTeam() {
  $(".link").on("click", function() {
    if($(this).hasClass("active")) {
      $(this).parent().prev().animate({
        bottom: "0%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-5%"
        }, 500);
      });
      $(this).parent().prev().removeClass("imShadow");
      $(this).removeClass("active");
    } else {
      $(this).parent().prev().addClass("imShadow");
      $(this).parent().prev().animate({
        bottom: "-25%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-400%"
        }, 500);
      });
      $(this).addClass("active");
    }
  });
}
//------------------------------------------------------------------
//                    READY
//------------------------------------------------------------------

$(document).on("ready", function() {
  $slideMenu();
  $adjustHeight();
  $hoverPerson();
  $animateChart();
  $showTeam();
})
