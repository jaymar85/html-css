// https://jqueryui.com/tooltip
// Source: https://stackoverflow.com/questions/16838933/jquery-ui-tooltip-positioning-issue

$(function () {
  $("[title]").tooltip({
    show: {
      effect: "fadeIn",
      delay: 0,
    },
    position: {
      my: "center bottom-10",
      at: "center top",
      collision: "none",
      using: function (position, feedback) {
        $(this).css(position);
        $("<div>")
          .addClass("arrow")
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo(this);
      },
    },
  });
});
