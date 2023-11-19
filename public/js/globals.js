import $ from "jquery";

$(document).ready(function () {
  // 1- initiate select2 inside modal

  $(".form--select2.modal--select").each(function () {
    $(this).select2({
      dropdownParent: $(this).parent().parent().parent().parent(),
      placeholder: "",
    });
  });

  // ==========================================================

  // file upload
  $("#file--input").change(function () {
    const file = this.files[0];
    console.log(file);
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        console.log(event.target.result);
        $("#file--preview").attr("src", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
});
