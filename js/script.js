var $button = $(".button");

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

//------------------------------------------------------------------
//                    READY
//------------------------------------------------------------------

$(document).on("ready", function() {
  $slideMenu()
})
