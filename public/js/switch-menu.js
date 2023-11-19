import $ from "jquery";

$(document).ready(function () {
  // 1- switch button
  $(".switch--btn").on("click", function () {
    group = $(this).attr("data-group");
    target = $(this).attr("data-target");

    // : toggle outline / toggle target
    $(`section[data-group=${group}]`).addClass("d-none");

    $(`.switch--btn[data-group=${group}]`).each(function () {
      $(this).removeClass("btn--regular");
      $(this).addClass("btn--outline-regular");
    });

    // : toggle active / show section target
    $(this).addClass("btn--regular");
    $(target).removeClass("d-none");
  }); //end listerner function
}); //end ready function
