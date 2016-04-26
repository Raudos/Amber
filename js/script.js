var $containerRows = $(".container-fluid>.row");
var $button = $(".button");
var $person = $(".person");
var $hover = $(".hover");
var $quoteNav = $(".circleContainer .circle")
var $quotes = $(".quote");
var $quote, $quoteCircle, $child;

//------------------------------------------------------------------
//                    FUNCTIONS
//------------------------------------------------------------------

function $paddingMe() {
  $width = $(window).width();
  if ($width > 1500) {
    $width = ($width - 1500) / 2;
    $width += "px";
    $containerRows.css("padding-left", $width);
    $containerRows.css("padding-right", $width);
  } else {
    $containerRows.css("padding-left", "0.5em");
    $containerRows.css("padding-right", "0.5em");
  }
}
//hover was acting weird on mobile so i've put two functions, each is triggered depending on the width of device
function $slideMenuMobile() {
  $button.on("click", function() {
    $(".upper").css("height", "20%");
    $(".lower").css("height", "80%");
    $(this).children(".upper").animate({
      height: "100%"
    }, 300);
    $(this).children(".lower").animate({
      height: "0%"
    }, 300);
  })
}
function $slideMenuPC() {
  $button.on("mouseenter", function() {
    $(this).children(".upper").animate({
      height: "100%"
    }, 300);
    $(this).children(".lower").animate({
      height: "0%"
    }, 300);
  });
  $button.on("mouseleave", function() {
    $(this).children(".upper").animate({
      height: "20%"
    }, 500);
    $(this).children(".lower").animate({
      height: "80%"
    }, 300);
  });
}
function $adjustHeight() {
  //i just like squares, thats all
  $person.css("height", $person.width() + "px");
}
function $hoverPerson() {
  $person.hover(function() {
    $(this).children(".hover").toggle();
    $(this).children(".about").toggle();
  });
}
function $animateChart() {
  //when you put mouse over image it spins around
  $(".graph:nth-child(1)").children(".outer").on("mouseenter", function () {
    $(this).children("img").addClass("animateOne");
  });
  $(".graph:nth-child(3)").children(".outer").on("mouseenter", function () {
    $(this).children("img").addClass("animateTwo");
  });
  $(".graph:nth-child(5)").children(".outer").on("mouseenter", function () {
    $(this).children("img").addClass("animateThree");
  });
  $(".outer").on("mouseleave", function() {
    $(this).children("img").removeClass("animateOne animateTwo animateThree");
  })
}
function $showTeam() {
  //whenever user clicks on the profile button div with name should animate to the top of parent element
  //while about section goes under the parent element
  $(".link").on("click", function() {
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().prev().animate({
        bottom: "0%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-5%"
        }, 500);
      });
      $(this).parent().prev().removeClass("imShadow");
    } else {
      $(this).addClass("active");
      $(this).parent().prev().addClass("imShadow");
      $(this).parent().prev().animate({
        bottom: "-25%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-400%"
        }, 500);
      });
    }
  });
}

function $nextQuote() {
  /* Add class .clicked to the corresponding .quote after .quoteNav is clicked */
  $quoteNav.on("click", function() {
    $quote = $(".quote.clicked");
    $quoteCircle = $(".circle.clicked");
    $quoteCircle.removeClass("clicked");
    $(this).addClass("clicked");
    for (var i = 1; $quotes.length >= i; i++) {
      $child = ":nth-child(" + i + ")";
      if ($(this).is($child)) {
        $quoteSelector = ".quote" + $child;
        $quote.removeClass("clicked");
        $($quoteSelector).addClass("clicked");
      }
    }
  })
};
//------------------------------------------------------------------
//                    READY
//------------------------------------------------------------------

$(document).on("ready", function() {
  $paddingMe();
  $(window).resize(function() {
    $paddingMe();
    $adjustHeight();
  });
  if (window.matchMedia('(max-width: 991px)').matches) {
    $slideMenuMobile();
  } else {
    $slideMenuPC();
  }
  $adjustHeight();
  $hoverPerson();
  $animateChart();
  $showTeam();
  $nextQuote()
})
