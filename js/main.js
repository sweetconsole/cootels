var buttons = [$("#accordion-button-one"), $("#accordion-button-two"), $("#accordion-button-three")];
var blocks = [$("#accordion-info-one"), $("#accordion-info-two"), $("#accordion-info-three")];
var burger = $("#burger");
var body = $("body");
var menu = $("#menu");


burger.on("click", function() {
   burger.toggleClass("menu-burger-active")
   body.toggleClass("menu-active-body");
   menu.slideToggle(500);
});

buttons[0].on("click", function() {
   buttons[0].toggleClass("get-accordion-button-active");
   blocks[0].slideToggle(500);

   buttons[1].removeClass("get-accordion-button-active");
   buttons[2].removeClass("get-accordion-button-active")
   blocks[1].slideUp(500);
   blocks[2].slideUp(500);
});

buttons[1].on("click", function() {
   buttons[1].toggleClass("get-accordion-button-active");
   blocks[1].slideToggle(500);

   buttons[0].removeClass("get-accordion-button-active");
   buttons[2].removeClass("get-accordion-button-active");
   blocks[0].slideUp(500);
   blocks[2].slideUp(500);
});

buttons[2].on("click", function() {
   buttons[2].toggleClass("get-accordion-button-active");
   blocks[2].slideToggle(500);

   buttons[0].removeClass("get-accordion-button-active");
   buttons[1].removeClass("get-accordion-button-active")
   blocks[0].slideUp(500);
   blocks[1].slideUp(500);
});
